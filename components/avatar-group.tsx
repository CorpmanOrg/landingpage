import Image from "next/image";

interface User {
  id: string;
  name: string;
  imageUrl: string;
}

interface AvatarGroupProps {
  users: User[];
  maxVisible?: number;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-12 h-12",
};

export const AvatarGroup = ({ users, maxVisible = 4, size = "md" }: AvatarGroupProps) => {
  const visibleUsers = users.slice(0, maxVisible);
  const remainingCount = users.length - maxVisible;
  const hasOverflow = remainingCount > 0;

  return (
    <div className="flex items-center -space-x-3">
      {visibleUsers.map((user, index) => (
        <div
          key={user.id}
          className={`relative ${sizeClasses[size]} rounded-full border-2 border-white bg-white overflow-hidden shadow-sm`}
          style={{ zIndex: maxVisible - index }}
        >
          <Image
            src={user.imageUrl}
            alt={`${user.name}'s profile picture`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 40px, 40px"
          />
        </div>
      ))}

      {hasOverflow && (
        <div
          className={`relative ${sizeClasses[size]} rounded-full border-2 border-white bg-gray-500 flex items-center justify-center shadow-sm`}
          style={{ zIndex: 0 }}
        >
          <span className="text-white text-xs font-medium">+{remainingCount}</span>
        </div>
      )}
    </div>
  );
};

export default AvatarGroup;
