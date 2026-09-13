import {
  Suspense,
  use,
  useState
} from "react";

import SkillCard from "./SkillCard";
import SelectedSkill from "./SelectedSkill";
import { toast } from "react-toastify";


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


// Fetch function

const fetchSkills = async (): Promise<Skill[]> => {
  try {
    const response = await fetch("/data/skills.json");

    if (!response.ok) {
      throw new Error(
        `Failed to fetch skills: ${response.status}`
      );
    }

    const data: Skill[] = await response.json();

    return data;

  } catch (error) {
    console.error("Error fetching skills:", error);
    throw error;
  }
};


// Promise

const skillsPromise = fetchSkills();


function SkillStack() {

  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          <p className="text-xl font-semibold">
            Loading skills...
          </p>
        </div>
      }
    >
      <SkillContent />
    </Suspense>
  );
}


function SkillContent() {

  const skills = use(skillsPromise);

  const [selectedSkills, setSelectedSkills] =
    useState<Skill[]>([]);


  // Add skill

  const handleAdd = (skill: Skill) => {

    setSelectedSkills([
      ...selectedSkills,
      skill
    ]);

    toast.success(`${skill.name} added successfully!`);

  };


  // Remove skill

  const handleRemove = (skillId: string) => {
    const removedSkill = selectedSkills.find(
      skill => skill.id === skillId
    );

    setSelectedSkills(prevSkills =>
      prevSkills.filter(
        skill => skill.id !== skillId
      )
    );

    if (removedSkill) {
      toast.error(`${removedSkill.name} removed!`);
    }
  };

  // Remove All Skills
  const handleRemoveAll = () => {
    setSelectedSkills([]);
    toast.info("All technologies removed!");
  };

  return (
    <div className="container mx-auto bg-white py-10 px-4">

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900">
            Explore the{" "}
            <span className="text-pink-500">
              Technologies
            </span>
          </h1>

          <p className="mt-2 text-gray-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4 lg:items-start">

          <div className="lg:col-span-3">

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">

              {skills.map((skill) => {

                const isSelected = selectedSkills.some(
                  (selectedSkill) =>
                    selectedSkill.id === skill.id
                );

                return (
                  <SkillCard
                    key={skill.id}
                    skill={skill}
                    isSelected={isSelected}
                    handleAdd={handleAdd}
                  />
                );

              })}

            </div>

          </div>

          {/* left part */}
          <div className="lg:col-span-1">

            <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

              <h2 className="text-lg font-bold text-slate-900">
                Your Stack
              </h2>

              <p className="mt-1 text-sm text-gray-400">
                {selectedSkills.length === 0
                  ? "No technologies selected yet."
                  : `${selectedSkills.length} Technology Selected`}
              </p>


              {/* Selected Skills */}
              <div className="mt-5 space-y-3">

                {selectedSkills.length === 0 ? (

                  <div className="rounded-lg border border-dashed border-gray-300 p-5 text-center">
                    <p className="text-sm text-gray-400">                      
                      Your stack is empty.
                    </p>
                  </div>

                ) : (

                  selectedSkills.map((skill) => (
                    <SelectedSkill
                      key={skill.id}
                      skill={skill}
                      handleRemove={handleRemove}
                    />
                  ))

                )}

              </div>

              {/* Remove All Button */}
              {selectedSkills.length > 0 && (
                <button
                  onClick={handleRemoveAll}
                  className="mt-10 w-full rounded-lg border border-red-300 py-2 text-sm font-semibold text-red-500 transition hover:bg-red-50"
                >
                  Remove All
                </button>
              )}

            </div>

          </div>

        </div>
      </div>
  );
  
}


export default SkillStack;