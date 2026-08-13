import ProfileCard from "../../components/profile/ProfileCard";
import Informations from "../../components/profile/Information";
import SkillsSection from "../../components/profile/SkillsSection";
import JobPreferences from "../../components/profile/JobPreference";
import SocialLinks from "../../components/profile/SocialLinks";

const Profile = () => {
    return (
       <div className="max-w-7xl mx-auto">

            <div className="mb-8 mt-[32px]">
                <h1 className="text-4xl font-bold text-white">
                    Profile
                </h1>

                <p className="text-slate-400 mt-2">
                    Manage your personal and professional information.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

              
                <div className="lg:col-span-1">
                    <ProfileCard />
                </div>

                <div className="lg:col-span-2">
                    <Informations />
                </div>

            </div>

            <div className="space-y-6 mt-[32px]">

                <SkillsSection />

                <JobPreferences />

                <SocialLinks />

            </div>

        </div>
    );
};

export default Profile;