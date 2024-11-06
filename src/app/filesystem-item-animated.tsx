'use client';

import { ChevronRightIcon } from '@heroicons/react/16/solid';
import { DocumentIcon, FolderIcon } from '@heroicons/react/24/solid';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

type Node = {
  name: string;
  nodes?: Node[];
};

export function FilesystemItemAnimated({ node }: { node: Node }) {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <li key={node.name}>
      {node.nodes?.length ? (
        <button
          className="flex items-center gap-1.5 py-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.span animate={{ rotate: isOpen ? 90 : 0 }} className="flex">
            <ChevronRightIcon className="size-4 text-gray-500" />
          </motion.span>
          <FolderIcon className="size-6 text-sky-500" />
          {node.name}
        </button>
      ) : (
        <span className="flex items-center gap-1.5 py-1">
          {node.nodes ? (
            <FolderIcon className="size-6 text-sky-500 ml-[22px]" />
          ) : (
            <DocumentIcon className="ml-[22px] size-6 text-gray-900" />
          )}
          {node.name}
        </span>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            className="pl-6 overflow-hidden flex flex-col justify-end"
          >
            {node.nodes?.map((node) => (
              <FilesystemItemAnimated node={node} key={node.name} />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
}
