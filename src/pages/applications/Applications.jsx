import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Header from "../../components/applications/ApplicationHeader";
import Toolbar from "../../components/applications/ApplicationToolbar";
import ApplicationCard from "../../components/applications/ApplicationCard";
import EmptyState from "../../components/applications/EmptyState";
import AddApplicationModal from "../../components/applications/ApplicationModal";
import ViewApplicationModal from "../../components/applications/ViewApplicationModal";
import DeleteModal from "../../components/applications/DeleteModal";
import applicationData from "../../data/Applications";

const Applications = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const [applications, setApplications] = useState(applicationData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [applicationToDelete, setApplicationToDelete] = useState(null);

  const handleSaveApplication = (applicationData) => {

    if (selectedApplication) {
      setApplications((prev) => prev.map((app) =>
        app.id === selectedApplication.id ? { ...selectedApplication, ...applicationData, } : app
      )
      );

      setSelectedApplication(null);
    } else {
      const applicationWithId = {
        id: Date.now(), logo: applicationData.company.charAt(0).toUpperCase(),
        ...applicationData,
      };
      setApplications((prev) => [...prev, applicationWithId,]);
    }
  };

  useEffect(() => {
    if (location.state?.openModal) {

      setIsModalOpen(true);

      navigate(location.pathname, {
        replace: true,
        state: {},
      });

    }
  }, [location.state, navigate, location.pathname]);

  const handleViewApplication = (application) => {
    setSelectedApplication(application);
    setIsViewModalOpen(true);
  };

  const handleCloseViewModal = () => {
    setIsViewModalOpen(false);
    setSelectedApplication(null);
  };

  const handleEditApplication = (application) => {
    console.log(application);
    setSelectedApplication(application);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedApplication(null);
  };

  const handleDeleteApplication = (application) => {
    setApplicationToDelete(application);
    setIsDeleteModalOpen(true);
  };

  const confirmDeleteApplication = () => {
    setApplications((prev) =>
      prev.filter((app) => app.id !== applicationToDelete.id)
    );
    setApplicationToDelete(null);
    setIsDeleteModalOpen(false);
  };

  const handleCloseDeleteModal = () => {
    setApplicationToDelete(null);
    setIsDeleteModalOpen(false);
  };

  return (
    <>
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <Toolbar />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
        {applications.map((application) => (
          <ApplicationCard
            key={application.id}
            item={application}
            onView={handleViewApplication}
            onEdit={handleEditApplication}
            onDelete={handleDeleteApplication}
          />
        ))}
      </div>

      {applications.length === 0 && <EmptyState />}

      <AddApplicationModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSaveApplication={handleSaveApplication}
        application={selectedApplication}
      />

      <ViewApplicationModal
        isOpen={isViewModalOpen}
        onClose={handleCloseViewModal}
        application={selectedApplication}
      />

      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={handleCloseDeleteModal}
        onConfirm={confirmDeleteApplication}
        application={applicationToDelete}
      />
    </>
  );
};

export default Applications;