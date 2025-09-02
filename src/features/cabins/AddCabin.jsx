import { useState } from "react";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

function AddCabin() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpenModal((show) => !show)}>
        Add new cabin
      </Button>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal((e) => !e)}>
          <CreateCabinForm onCloseModal={() => setIsOpenModal((e) => !e)} />
        </Modal>
      )}
    </div>
  );
}

export default AddCabin;
