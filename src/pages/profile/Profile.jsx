import ProfileCard from "../../components/profile/ProfileCard";
import Informations from "../../components/profile/Information";
import SkillsSection from "../../components/profile/SkillsSection";
import JobPreferences from "../../components/profile/JobPreference";
import SocialLinks from "../../components/profile/SocialLinks";

const Profile = () => {
    return (
        <div className="w-full max-w-7xl mx-auto">

            {/* Header */}
            <div className="mb-6">

                <h1 className="
                    text-3xl
                    sm:text-4xl
                    font-bold
                    text-white
                ">
                    Profile
                </h1>

                <p className="
                    text-slate-400
                    mt-2
                    text-sm
                    sm:text-base
                ">
                    Manage your personal and professional information.
                </p>

            </div>


            {/* Profile + Information */}
            <div className="
                grid
                grid-cols-1
                lg:grid-cols-3
                gap-5
                lg:gap-6
            ">

                <div className="lg:col-span-1">
                    <ProfileCard />
                </div>

                <div className="lg:col-span-2">
                    <Informations />
                </div>

            </div>


            {/* Other Sections */}
            <div className="space-y-5 lg:space-y-6 mt-5 lg:mt-6">

                <SkillsSection />

                <JobPreferences />

                <SocialLinks />

            </div>

        </div>
    );
};

export default Profile;