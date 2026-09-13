import { RxCheck } from "react-icons/rx";
import { TbStarFilled } from "react-icons/tb";

interface Skill {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}

interface SkillCardProps {
  skill: Skill;
  isSelected: boolean;
  handleAdd: (skill: Skill) => void;
}

function SkillCard({
  skill,
  isSelected,
  handleAdd
}: SkillCardProps) {
  return (
    <div className={`rounded-2xl bg-white p-6 shadow-sm ${
  isSelected
    ? "border-2 border-pink-500"
    : "border border-gray-200"
}`}>

      <div className="flex items-center justify-between">
        <img
          src={skill.icon}
          alt={skill.name}
          className="h-12 w-12"
        />

        <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
          {skill.badge}
        </span>
      </div>

      <h2 className="mt-5 text-2xl font-bold">
        {skill.name}
      </h2>

      <p className="mt-2 text-gray-500">
        {skill.description}
      </p>

      <div className="mt-4 flex items-center justify-between gap-2">

        {/* Left Side */}
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">
            {skill.category}
          </span>

          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-700">
            {skill.difficulty}
          </span>
        </div>


        {/* Right Side - Rating */}
        <div className="flex items-center gap-1">
          <TbStarFilled className="text-yellow-400" />

          <span className="text-xs font-medium text-gray-700">
            {skill.rating}
          </span>
        </div>

      </div>


      <button
        disabled={isSelected}
        onClick={() => handleAdd(skill)}
        className={`mt-5 w-full rounded-xl px-4 py-3 font-semibold ${
          isSelected
            ? "cursor-not-allowed bg-green-100 text-green-700"
            : "bg-black text-white hover:bg-gray-800"
        }`}
      >
      {isSelected ? (
        <span className="flex items-center justify-center gap-2">
          <RxCheck />
          Added to Stack
        </span>
      ) : (
        "Add to Stack"
      )}
      </button>

    </div>
  );
}

export default SkillCard;