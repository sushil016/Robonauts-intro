

// Dummy components for illustration
const Shield = ({ className }: { className?: string }) => <div className={className}>Shield Icon</div>;
const Camera = ({ className }: { className?: string }) => <div className={className}>Camera Icon</div>;
const Sword = ({ className }: { className?: string }) => <div className={className}>Sword Icon</div>;
const Video = ({ className }: { className?: string }) => <div className={className}>Video Icon</div>;
const ImageIcon = ({ className }: { className?: string }) => <div className={className}>Image Icon</div>;
const Box = ({ className }: { className?: string }) => <div className={className}>Box Icon</div>;

const IconMapping = {
  Shield,
  Camera,
  Sword,
  Video,
  ImageIcon,
  Box
};

export default IconMapping;