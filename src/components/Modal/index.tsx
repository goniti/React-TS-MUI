import React, { useRef, useEffect, useCallback, SetStateAction, Dispatch, FC } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { color } from '../../styles/color';
import { vars } from '../../styles/vars';

const Overlay = styled.div`
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    z-index: 999;
`;

const ModalWrapper = styled('div')<{ img: string | undefined }>`
    width: 800px;
    height: 500px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: ${color.light};
    color: ${color.dark};
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    z-index: 10;
    border-radius: 10px;
    overflow: hidden;
    background-image: url(${(props) => props.img});
    background-size: 100% 100%;
`;

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: ${color.ChineseBlack};
    p {
        margin-bottom: 1rem;
    }
    button {
        padding: 10px 24px;
        background: ${color.ChineseBlack};
        color: ${color.light};
        border: none;
    }
`;

const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: ${vars.gutter};
    right: ${vars.gutter};
    width: ${vars.crossModalSize};
    height: ${vars.crossModalSize};
    padding: 0;
    z-index: 10;
    color: ${color.primary};
`;

interface ModalProps {
    imagePath?: string;
    children?: React.ReactNode;
    showModal?: boolean;
    setShowModal: Dispatch<SetStateAction<boolean>>;
}

export const Modal: FC<ModalProps> = ({ imagePath, children, showModal, setShowModal }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    console.log(imagePath);

    const animation = useSpring({
        config: {
            duration: 250,
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? 'translateY(0%)' : 'translateY(-100%)',
    });

    const closeModal = (e: React.MouseEvent<HTMLElement>): void => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
    };

    const keyPress = useCallback(
        (e: KeyboardEvent): void => {
            if (e.key === 'Escape' && showModal) {
                setShowModal(false);
            }
        },
        [setShowModal, showModal],
    );

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);

    return (
        <>
            {showModal ? (
                <Overlay onClick={closeModal} ref={modalRef}>
                    <animated.div style={animation}>
                        <ModalWrapper img={imagePath}>
                            <ModalContent>{children}</ModalContent>
                            <CloseModalButton aria-label="Close modal" onClick={() => setShowModal((prev) => !prev)} />
                        </ModalWrapper>
                    </animated.div>
                </Overlay>
            ) : null}
        </>
    );
};
