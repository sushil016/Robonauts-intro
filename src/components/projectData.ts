
import DroneModel from './projects/DroneModel';
import BattleBot from './projects/BattleBot';
import ContentDrone from './projects/ContentDrone';
import { Project } from './types';

export const projects: Project[] = [
  {
    id: 'security-drone',
    title: 'Automation Drone',
    description: 'Advanced security drone equipped with AI-powered surveillance and real-time threat detection. Featuring 4K thermal imaging and autonomous patrol capabilities.',
    background: {
      type: 'security',
      gradientFrom: 'slate-900',
      gradientTo: 'slate-800'
    },
    icons: [
      { name: 'Shield', color: 'text-blue-400' },
      { name: 'Camera', color: 'text-blue-400' }
    ],
    stats: [
      { label: 'Range', value: '5km' },
      { label: 'Flight Time', value: '45min' },
      { label: 'AI Detection', value: '99.9%' }
    ],
    ModelComponent: DroneModel
  },
  {
    id: 'battle-bot',
    title: 'Combat Robot',
    description: 'State-of-the-art combat robot designed for competitive battles. Features high-torque motors, reinforced armor, and advanced weapon systems.',
    background: {
      type: 'battle',
      gradientFrom: 'red-900',
      gradientTo: 'slate-900'
    },
    icons: [
      { name: 'Sword', color: 'text-red-400' }
    ],
    stats: [
      { label: 'Power', value: '2000W' },
      { label: 'Weight', value: '250lbs' },
      { label: 'Speed', value: '20mph' }
    ],
    ModelComponent: BattleBot
  },
  {
    id: 'content-drone',
    title: 'Content Creator Drone',
    description: 'Professional-grade content creation drone with 8K camera system, 3D scanning capabilities, and advanced stabilization for perfect shots.',
    background: {
      type: 'content',
      gradientFrom: 'purple-900',
      gradientTo: 'slate-900'
    },
    icons: [
      { name: 'Video', color: 'text-purple-400' },
      { name: 'ImageIcon', color: 'text-purple-400' },
      { name: 'Box', color: 'text-purple-400' }
    ],
    stats: [
      { label: 'Resolution', value: '8K' },
      { label: 'Stabilization', value: '6-Axis' },
      { label: 'Storage', value: '1TB' }
    ],
    ModelComponent: ContentDrone
  }
];