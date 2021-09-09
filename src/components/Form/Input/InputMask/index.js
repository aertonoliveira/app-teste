import React from 'react';

import { InputMask, InputMask2, TitleInput, InputMaskColumn } from './styles';

export function InputMaskRG({ title, ...rest }) {
  return (
    <>
      <TitleInput>{title}</TitleInput>
      <InputMask
        {...rest}
        placeholder="Digite seu RG"
        mask={'[00].[000].[000]-[00]'}
      />
    </>
  );
}

export function InputMaskCVV({ title, ...rest }) {
  return (
    <InputMaskColumn>
      <TitleInput>{title}</TitleInput>
      <InputMask {...rest} placeholder="Ex: 000" mask={'[000]'} />
    </InputMaskColumn>
  );
}

export function InputMaskDate({ title, ...rest }) {
  return (
    <InputMaskColumn>
      <TitleInput>{title}</TitleInput>
      <InputMask {...rest} placeholder="Ex: 12/2020" mask={'[00]/[0000]'} />
    </InputMaskColumn>
  );
}

export function InputMaskCard({ title, ...rest }) {
  return (
    <>
      <TitleInput>{title}</TitleInput>
      <InputMask
        {...rest}
        placeholder="Ex: 0000 0000 0000 0000"
        mask={'[0000][0000][0000][0000]'}
      />
    </>
  );
}

export function InputMaskCPF({ title, ...rest }) {
  return (
    <>
      <TitleInput>{title}</TitleInput>
      <InputMask
        {...rest}
        placeholder="Digite seu CPF"
        mask={'[000].[000].[000]-[00]'}
      />
    </>
  );
}

export function InputMaskCNPJ({ title, ...rest }) {
  return (
    <>
      <TitleInput>{title}</TitleInput>
      <InputMask
        {...rest}
        placeholder="Digite seu CNPJ"
        mask={'[00].[000].[000]/[0000]-[00]'}
      />
    </>
  );
}

export function InputMaskCEP({ title, ...rest }) {
  return (
    <>
      <TitleInput>{title}</TitleInput>
      <InputMask
        {...rest}
        placeholder="Digite seu CEP"
        mask={'[00000]-[000]'}
      />
    </>
  );
}

export function InputMaskPhone({ title, ...rest }) {
  return (
    <>
      <TitleInput>{title}</TitleInput>
      <InputMask
        {...rest}
        placeholder="Digite seu Telefone"
        mask={'+55 ([00]) [0] [0000]-[0000]'}
      />
    </>
  );
}

export function InputMaskBirthday({ title, ...rest }) {
  return (
    <>
      <TitleInput>{title}</TitleInput>
      <InputMask
        {...rest}
        placeholder="Ex: 01/10/1990"
        mask={'[00]/[00]/[0000]'}
      />
    </>
  );
}

export function InputMaskZip({ title, ...rest }) {
  return (
    <>
      <TitleInput>{title}</TitleInput>
      <InputMask {...rest} placeholder="Ex: xxxxx-xxx" mask={'[00000]-[000]'} />
    </>
  );
}

export function InputMaskPrefix({ title, ...rest }) {
  return (
    <>
      <TitleInput>{title}</TitleInput>
      <InputMask {...rest} placeholder="Ex: 000" mask={'[000]'} />
    </>
  );
}

export function InputMaskBudget({ ...rest }) {
  return (
    <>
      <InputMask2 {...rest} mask={'[000],[00]'} />
    </>
  );
}
