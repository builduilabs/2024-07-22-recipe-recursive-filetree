'use client';

import { useState } from 'react';
import { FilesystemItemAnimated } from './filesystem-item-animated';
import { nodes } from './nodes';
import * as Switch from '@radix-ui/react-switch';
import { MotionConfig } from 'framer-motion';

export default function Page() {
  let [isAnimated, setIsAnimated] = useState(false);

  return (
    <div className="relative h-full">
      <div className="flex items-center absolute top-4 right-4">
        <label
          className="text-white pr-3 font-medium text-sm"
          htmlFor="animated"
        >
          ✨ Animate
        </label>
        <Switch.Root
          id="animated"
          checked={isAnimated}
          onCheckedChange={setIsAnimated}
          className="w-[34px] h-5 bg-gray-700 border border-gray-600 rounded-full relative shadow-inner focus-visible:ring data-[state=checked]:bg-brand data-[state=checked]:border-brand transition outline-none data-[state=unchecked]:hover:border-gray-500"
          style={{ WebkitTapHighlightColor: 'transparent' }}
        >
          <Switch.Thumb className="block size-3.5 bg-white shadow rounded-full transition-transform translate-x-0.5 will-change-transform data-[state=checked]:translate-x-4" />
        </Switch.Root>
      </div>

      <div className="h-full py-8">
        <div className="p-4 rounded-lg mx-auto h-full overflow-scroll shadow-lg shadow-black w-full max-w-sm bg-white">
          {/* transition={{ type: 'spring', bounce: 0, duration: 0.4 }} */}
          <MotionConfig
            transition={{
              type: 'spring',
              bounce: 0,
              duration: isAnimated ? 0.4 : 0,
            }}
          >
            <ul>
              {nodes.map((node) => (
                <FilesystemItemAnimated node={node} key={node.name} />
              ))}
            </ul>
          </MotionConfig>
        </div>
      </div>
    </div>
  );
}
