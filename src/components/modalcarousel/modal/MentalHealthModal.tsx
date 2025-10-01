"use client";
import Modal from "./Modal";
import Carousel from "../carousel/Carousel";

type MentalHealthModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

export default function MentalHealthModal({ isOpen, onClose }: MentalHealthModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <Carousel onFinish={onClose} />
        </Modal>
    );
}
