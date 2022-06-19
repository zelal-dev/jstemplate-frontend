import styled from "@emotion/styled";
import React from "react";

const PopupModule = ({
  children,
  titleClassName,
  closeIconClassName,
  bodyClassName,
  overlayClassName,
  title,
  show,
  onClose,
  maxWidth,
  maxHeight,
}: {
  children: any;
  titleClassName?: string;
  closeIconClassName?: string;
  bodyClassName?: string;
  overlayClassName?: string;
  title?: string;
  show?: boolean;
  onClose?: () => void;
  maxWidth?: string;
  maxHeight?: string;
}) => {
  return (
    <>
      <PopupWrapper className={show ? "show" : "hide"}>
        <div className="flex h-screen w-full items-center justify-center relative z-20">
          <Form
            className={`${show ? "show" : "hide"} dark:bg-planDetails`}
            // @ts-ignore
            maxHeight={maxHeight}
            maxWidth={maxWidth}
          >
            <FormTitle className="dark:!border-planDes">
              <FormTitleText
                className={`${
                  titleClassName ? titleClassName : ""
                } dark:text-background`}
              >
                {title}
              </FormTitleText>
              <FormTitleClose
                onClick={onClose}
                className={
                  closeIconClassName
                    ? closeIconClassName
                    : "hover:bg-themePrimary duration-300 ease-in-out"
                }
              >
                <CloseIcon />
              </FormTitleClose>
            </FormTitle>
            <FormBody
              className={`${
                bodyClassName ? bodyClassName : ""
              } dark:text-background`}
            >
              {children}
            </FormBody>
          </Form>
          <PopupOverlay
            className={overlayClassName ? overlayClassName : ""}
            onClick={onClose}
          />
        </div>
        <div
          className="w-full h-full left-0 top-0 fixed z-10"
          onClick={onClose}
        />
      </PopupWrapper>
    </>
  );
};

const CloseIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
        fill="currentColor"
      />
    </svg>
  );
};

export default PopupModule;

const PopupWrapper = styled("div")`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 99;
  color: #fff;
  transition: all 0.3s ease-in-out;
  opacity: 0;
  visibility: hidden;
  &.show {
    opacity: 1;
    visibility: visible;
  }
`;
const Form = styled("div")`
  max-width: ${(props: any) => (props.maxWidth ? props.maxWidth : "550px")};
  width: 90%;
  max-height: ${(props: any) => (props.maxHeight ? props.maxHeight : "90%")};
  height: fit-content;
  overflow: auto;
  margin: 0 auto;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transform: scale(0.7);
  transition: all 0.3s ease-in-out;
  opacity: 0;
  visibility: hidden;
  position: relative;
  z-index: 2;
  &.show {
    transform: scale(1);
    opacity: 1;
    visibility: visible;
  }
`;
const FormTitle = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  border-bottom: 1px solid;
  border-color: #ebebeb;
  @media (max-width: 768px) {
    padding: 15px 20px;
  }
`;
const FormTitleText = styled("div")`
  font-size: 28px;
  font-weight: 500;
  color: #000;
`;
const FormTitleClose = styled("div")`
  cursor: pointer;
  padding: 15px;
  background-color: #000;
  border-radius: 5px;
  & svg {
    color: #fff;
    width: 16px;
    height: 16px;
  }
`;
const FormBody = styled("div")`
  padding: 40px;
  color: #000;
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;
const PopupOverlay = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
