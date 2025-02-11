import {
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import Link from "next/link";
import { Project } from "@/data/projects";
import React from "react";

const ProjectsTable = ({ projects }: { projects: Project[] }) => (
  <Table className="mt-1">
    <TableHeader className="sr-only">
      <TableRow className="">
        <TableHead className="w-[100px]">Icon</TableHead>
        <TableHead>Title</TableHead>
        <TableHead>Description</TableHead>
        <TableHead className="text-right">Link</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {projects.map((project) => (
        <TableRow key={project.title}>
          <TableCell className="font-medium w-10 flex items-center justify-center">
            {React.isValidElement(project.icon) ? (
              project.icon
            ) : project.icon ? (
              // @ts-ignore
              <project.icon size={20} />
            ) : null}
          </TableCell>
          <TableCell className="text-left  font-medium">
            {project.title}
          </TableCell>
          <TableCell className="truncate">{project.description}</TableCell>
          <TableCell className="text-right">
            <Link href={project.link} className="hover:underline">
              {project.displayUrl}
            </Link>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default ProjectsTable;
