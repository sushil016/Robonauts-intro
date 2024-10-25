export interface ProjectStats {
    label: string;
    value: string;
  }
  
  export interface ProjectIcon {
    name: 'Shield' | 'Camera' | 'Sword' | 'Video' | 'ImageIcon' | 'Box';
    color: string;
  }
  
  export interface Project {
    id: string;
    title: string;
    description: string;
    background: {
      type: 'security' | 'battle' | 'content';
      gradientFrom: string;
      gradientTo: string;
    };
    icons: ProjectIcon[];
    stats: ProjectStats[];
    ModelComponent: React.ComponentType<{ className?: string }>;
  }