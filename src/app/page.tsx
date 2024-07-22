import { FilesystemItem } from './filesystem-item';

type Node = {
  name: string;
  nodes?: Node[];
};

let nodes: Node[] = [
  {
    name: 'Home',
    nodes: [
      {
        name: 'Movies',
        nodes: [
          {
            name: 'Action',
            nodes: [
              {
                name: '2000s',
                nodes: [
                  { name: 'Gladiator.mp4' },
                  { name: 'The-Dark-Knight.mp4' },
                ],
              },
              { name: '2010s', nodes: [] },
            ],
          },
          {
            name: 'Comedy',
            nodes: [{ name: '2000s', nodes: [{ name: 'Superbad.mp4' }] }],
          },
          {
            name: 'Drama',
            nodes: [
              { name: '2000s', nodes: [{ name: 'American-Beauty.mp4' }] },
            ],
          },
        ],
      },
      {
        name: 'Music',
        nodes: [
          { name: 'Rock', nodes: [] },
          { name: 'Classical', nodes: [] },
        ],
      },
      { name: 'Pictures', nodes: [] },
      {
        name: 'Documents',
        nodes: [],
      },
      { name: 'passwords.txt' },
    ],
  },
];

export default function Page() {
  return (
    <div className="p-8 mx-auto w-full max-w-sm">
      <ul>
        {nodes.map((node) => (
          <FilesystemItem node={node} key={node.name} />
        ))}
      </ul>
    </div>
  );
}
