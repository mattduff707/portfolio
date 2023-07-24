import styled from "styled-components";

const SwitchInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
`;

const SwitchLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 72px;
  height: 40px;
  border-radius: 100px;
  border: 4px solid var(--font-color);
  position: relative;
  transition: background-color 0.2s;

  &:hover svg {
    fill: var(--color-primary);
  }
`;

const SwitchButton = styled.span`
  content: "";
  position: absolute;
  display: grid;
  place-items: center;
  top: 2px;
  left: 2px;
  width: 28px;
  height: 28px;
  border-radius: 45px;
  transition: 0.2s;
  background: var(--font-color);
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
  ${SwitchInput}:checked + ${SwitchLabel} & {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }

  ${SwitchLabel}:active & {
    width: 45px;
  }
`;

const Switch = ({
  id,
  toggled,
  onChange,
  icons,
}: {
  id: string;
  toggled: boolean;
  onChange: any;
  icons?: [JSX.Element, JSX.Element];
}) => {
  const [OffIcon, OnIcon] = icons;
  return (
    <>
      <SwitchInput
        className="switch-checkbox"
        id={id}
        type="checkbox"
        checked={toggled}
        onChange={onChange}
      />
      <SwitchLabel className="switch-label" htmlFor={id}>
        {icons ? (
          <SwitchButton className="switch-button">
            {toggled ? OnIcon : OffIcon}
          </SwitchButton>
        ) : (
          <SwitchButton className="switch-button" />
        )}
      </SwitchLabel>
    </>
  );
};

export default Switch;
