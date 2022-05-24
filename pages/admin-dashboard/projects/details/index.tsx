import Layout from "../../../../src/components/Layout";
import React, { useState } from "react";
import Message from "../../../../src/Sections/BuyerDashboardPage/DashboardProjects/Message";
import ProjectDetailsPart from "../../../../src/Sections/BuyerDashboardPage/DashboardProjects/ProjectDetails";
import Requirements from "../../../../src/Sections/BuyerDashboardPage/DashboardProjects/Requirements";
import { LoaderGrowing } from "../../../../src/lib/loader";
import { useUser, UserNotLogin } from "../../../../src/lib/useUser";

const ProjectDetails = () => {
  const { loggedIn, user } = useUser();
  const [messagePart, setMessagePart] = useState<string>("block");
  const [messageColor, setMessageColor] = useState<string>(
    "text-gray-900 font-semibold"
  );
  const [messagePartSmall, setMessagePartSmall] = useState<string>("hidden");
  const [messageColorSmall, setMessageColorSmall] = useState<string>(
    "text-gray-700 font-semibold"
  );
  const [projectPart, setProjectPart] = useState<string>("block");
  const [projectColor, setProjectColor] = useState<string>("text-gray-900");
  const [requirementPart, setRequirementPart] = useState<string>("hidden");
  const [requirementColor, setRequirementColor] =
    useState<string>("text-gray-700");

  const handleMessageVisibility = () => {
    setRequirementPart("hidden");
    setMessagePart("block");
    setRequirementColor("text-gray-700");
    setMessageColor("text-gray-900 font-semibold");
  };
  const handleRequirementVisibility = () => {
    setMessagePart("hidden");
    setRequirementPart("block");
    setMessageColor("text-gray-700");
    setRequirementColor("text-gray-900 font-semibold");
  };
  const handleProjectVisibility = () => {
    setMessagePartSmall("hidden");
    setRequirementPart("hidden");
    setMessageColorSmall("text-gray-700");
    setRequirementColor("text-gray-700");
    setProjectPart("block");
    setProjectColor("text-gray-900 font-semibold");
  };
  const handleMessageVisibilitySmall = () => {
    setRequirementPart("hidden");
    setMessagePartSmall("block");
    setRequirementColor("text-gray-700");
    setMessageColorSmall("text-gray-900 font-semibold");
    setProjectPart("hidden");
    setProjectColor("text-gray-700");
  };
  const handleRequirementsVisibilitySmall = () => {
    setRequirementPart("block");
    setMessagePartSmall("hidden");
    setRequirementColor("text-gray-900 font-semibold");
    setMessageColorSmall("text-gray-700");
    setProjectPart("hidden");
    setProjectColor("text-gray-700");
  };

  if (!user && !loggedIn) {
    return <UserNotLogin />;
  }

  if (loggedIn && user) {
    return (
      <div>
        <Layout.AdminDashboard>
          <div
            className="md:py-7 md:px-12 p-2 bg-backgroundGrayOne overflow-y-auto"
            style={{ height: "calc(100vh - 75px)" }}
          >
            <div className="grid-cols-12 gap-8 hidden lg:grid">
              <div className="xl:col-span-6 col-span-12">
                <ProjectDetailsPart />
              </div>
              <div className="xl:col-span-6 col-span-12">
                <div className="bg-white rounded-lg p-6">
                  <div className="flex items-center">
                    <h3
                      className={`text-base  ${messageColor} mr-10`}
                      onClick={handleMessageVisibility}
                    >
                      Messages
                    </h3>
                    <h3
                      className={`text-base  ${requirementColor}`}
                      onClick={handleRequirementVisibility}
                    >
                      Requirements
                    </h3>
                  </div>
                  <div className="h-0.5 mt-4 w-full bg-backgroundGrayOne flex items-center">
                    <div
                      className={`h-0.5 w-20 ${messagePart} bg-blueTwo duration-150`}
                    />
                    <div
                      className={`h-0.5 w-28 ${requirementPart} bg-blueTwo duration-150 ml-28`}
                    />
                  </div>
                  <div className={`${messagePart} duration-150`}>
                    <Message />
                  </div>
                  <div className={`${requirementPart} duration-150`}>
                    <Requirements />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:hidden block">
              <div className="bg-white rounded-lg p-6">
                <div className="flex items-center">
                  <h3
                    className={`md:text-base text-sm  ${projectColor} xl:mr-10 lg:mr-9 md:mr-7 sm:mr-6 mr-5`}
                    onClick={handleProjectVisibility}
                  >
                    Project Details
                  </h3>
                  <h3
                    className={`md:text-base text-sm  ${messageColorSmall} xl:mr-10 lg:mr-9 md:mr-7 sm:mr-6 mr-5`}
                    onClick={handleMessageVisibilitySmall}
                  >
                    Messages
                  </h3>
                  <h3
                    className={`md:text-base text-sm  ${requirementColor}`}
                    onClick={handleRequirementsVisibilitySmall}
                  >
                    Requirements
                  </h3>
                </div>
                <div className="h-0.5 mt-4 w-full bg-backgroundGrayOne flex items-center">
                  <div
                    className={`h-0.5 md:w-28 w-24 ${projectPart} bg-blueTwo duration-150`}
                  />
                  <div
                    className={`h-0.5 md:w-20 w-16 ${messagePartSmall} bg-blueTwo duration-150 lg:ml-36 md:ml-32 ml-28`}
                  />
                  <div
                    className={`h-0.5 ms:w-28 w-24 ${requirementPart} bg-blueTwo duration-150 lg:ml-64 md:ml-60 ml-48`}
                  />
                </div>
                <div>
                  <div className={`${projectPart} duration-150`}>
                    <ProjectDetailsPart />
                  </div>
                  <div className={`${messagePartSmall} duration-150`}>
                    <Message />
                  </div>
                  <div className={`${requirementPart} duration-150`}>
                    <Requirements />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout.AdminDashboard>
      </div>
    );
  }

  return <LoaderGrowing />;
};

export default ProjectDetails;
