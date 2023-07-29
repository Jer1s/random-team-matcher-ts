import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import * as S from './SettingBar.style';
import { ISettingOption } from './SettingBar.interface';

interface IProps {
  settingOptions: ISettingOption[];
  setSettingOptions: Dispatch<SetStateAction<ISettingOption[]>>;
}

const SettingBar = ({ settingOptions, setSettingOptions }: IProps) => {
  const handleChangeOptionType = (event: ChangeEvent<HTMLInputElement>) => {};

  const handleCounter = (type: '+' | '-') => {
    const add = type === '+' ? 1 : -1;
    const changeOptionId = 'team';
    const newOptions = settingOptions.map((option) => {
      if (option.id === changeOptionId) {
        const { value: prevValue, ...res } = option;
        return { ...res, value: prevValue + add };
      } else {
        return option;
      }
    });
    setSettingOptions(newOptions);
  };

  return (
    <S.Ul>
      {settingOptions.map(({ title, checked, id, value }) => (
        <S.Li key={id}>
          <S.Radio>
            <input type="radio" id={id} value={id} checked={checked} onChange={handleChangeOptionType} />
            <label htmlFor={id}>{title}</label>
          </S.Radio>
          <S.Counter selected={checked}>
            <button disabled={!checked} onClick={handleCounter.bind(null, '-')}>
              -
            </button>
            <div>{value}</div>
            <button disabled={!checked} onClick={handleCounter.bind(null, '+')}>
              +
            </button>
          </S.Counter>
        </S.Li>
      ))}
    </S.Ul>
  );
};

export default SettingBar;
