import { TfiClose } from "react-icons/tfi";
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

interface SelectedSkillProps {
  skill: Skill;
  handleRemove: (skillId: string) => void;
}

function SelectedSkill({
  skill,
  handleRemove
}: SelectedSkillProps) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4">

      <div className="flex items-center gap-3">

        <img
          src={skill.icon}
          alt={skill.name}
          className="h-10 w-10"
        />

        <div>
          <h3 className="font-bold">
            {skill.name}
          </h3>

          <p className="text-sm text-gray-500">
            {skill.category}
          </p>
        </div>

      </div>

      <button
        onClick={() => handleRemove(skill.id)}
        className="rounded-lg bg-red-100 px-3 py-2 text-red-600"
      >
        <TfiClose />
      </button>

    </div>
  );
}

export default SelectedSkill;