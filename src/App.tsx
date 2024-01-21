import Container from "./components/ui/Container";
import Button from "./components/ui/Button";
import { useState } from "react";
import Modal from "./components/ui/Modal";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleClose = () => {
    setModalOpen((pre) => !pre);
  };

  return (
    <Container>
      {/* <Main></Main> */}
      <div className="h-screen w-full flex justify-center items-center ">
        <Button onClick={() => setModalOpen(true)}>Click Me</Button>

        <Modal isOpen={isModalOpen} onClose={handleClose}>
          <Modal.CloseButton></Modal.CloseButton>
          <h1>This awesome modal</h1>
        </Modal>
      </div>
    </Container>
  );
}

export default App;
