/**
 * URLInputModal Styled Components
 * Blue gradient style — aligned with MinecraftGuide modal
 */

import styled, { keyframes } from 'styled-components'
import { scColors, boxShadow, borders, borderRadius } from '@/theme'
import { fadeIn } from '@/theme/animations'

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
`

// ==================== BACKDROP & CARD ====================

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 250;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  animation: ${fadeIn} 200ms ease-out;
`

export const Card = styled.div`
  position: relative;
  width: 100%;
  max-width: 28rem;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, ${scColors.blue.light} 0%, ${scColors.blue.dark} 100%);
  border: ${borders.card};
  border-radius: ${borderRadius['2xl']};
  box-shadow: 8px 8px 0 rgba(0, 0, 0, 0.5);
  overflow: hidden;
`

// ==================== HEADER ====================

export const Header = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background: rgba(0, 0, 0, 0.2);
  border-bottom: ${borders.cardThin};
`

export const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 800;
  font-style: italic;
  text-transform: uppercase;
  color: ${scColors.white};
  margin: 0;
  letter-spacing: -0.025em;
  text-shadow:
    2px 2px 0 ${scColors.black},
    -1px -1px 0 ${scColors.black},
    1px -1px 0 ${scColors.black},
    -1px 1px 0 ${scColors.black};
  font-family: 'Lilita One', cursive;
`

export const TitleAccent = styled.span`
  color: ${scColors.yellow.base};
  font-family: inherit;
  font-weight: inherit;
  font-style: inherit;
  letter-spacing: inherit;
`

export const CloseButton = styled.button`
  width: 2.25rem;
  height: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, ${scColors.red.light} 0%, ${scColors.red.base} 100%);
  border: ${borders.button};
  border-radius: ${borderRadius.lg};
  box-shadow: ${boxShadow.buttonRed};
  color: ${scColors.white};
  font-size: 1.125rem;
  font-weight: 800;
  cursor: pointer;
  transition: transform 100ms ease, box-shadow 100ms ease;
  font-family: 'Lilita One', cursive;

  &:active {
    transform: translateY(3px);
    box-shadow: 0 2px 0 ${scColors.red.dark};
  }
`

// ==================== CONTENT ====================

export const Content = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const Subtitle = styled.p`
  font-size: 0.875rem;
  font-weight: 800;
  font-style: italic;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  margin: 0 0 1.25rem 0;
  letter-spacing: 0.1em;
  font-family: 'Lilita One', cursive;
`

// ==================== INPUT ====================

export const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 0.75rem;
`

export const InputCard = styled.div<{ $hasError?: boolean }>`
  background: rgba(0, 0, 0, 0.3);
  padding: 4px;
  display: flex;
  align-items: center;
  overflow: hidden;
  height: 3.25rem;
  border: 3px solid ${props => (props.$hasError ? scColors.red.base : 'rgba(255, 255, 255, 0.15)')};
  border-radius: ${borderRadius.lg};
  transition: border-color 150ms ease;

  &:focus-within {
    border-color: ${props => (props.$hasError ? scColors.red.base : scColors.yellow.base)};
  }
`

export const Input = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  padding: 0 0.875rem;
  font-size: 0.9375rem;
  font-weight: 700;
  color: ${scColors.white};
  outline: none;
  font-family: 'Lilita One', cursive;
  letter-spacing: 0.02em;

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
    font-family: 'Lilita One', cursive;
    font-style: italic;
    font-weight: 700;
  }
`

export const ErrorSlot = styled.div`
  min-height: 1.25rem;
  margin-top: 0.25rem;
`

export const ErrorText = styled.p`
  font-size: 0.6875rem;
  font-weight: 800;
  font-style: italic;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${scColors.red.light};
  margin: 0;
  animation: ${pulse} 1.5s ease-in-out infinite;
  font-family: 'Lilita One', cursive;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.3);
`

// ==================== FOOTER ====================

export const Footer = styled.div`
  flex-shrink: 0;
  padding: 1rem 1.5rem;
  background: rgba(0, 0, 0, 0.4);
  border-top: ${borders.cardThin};
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`

export const Actions = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const ButtonRow = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const ConfirmButton = styled.button`
  flex: 1;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, ${scColors.green.light} 0%, ${scColors.green.base} 100%);
  border: ${borders.button};
  border-radius: ${borderRadius.lg};
  box-shadow: 0 4px 0 ${scColors.green.dark};
  font-size: 1.125rem;
  font-weight: 800;
  font-style: italic;
  text-transform: uppercase;
  color: ${scColors.white};
  cursor: pointer;
  transition: transform 100ms ease, box-shadow 100ms ease;
  font-family: 'Lilita One', cursive;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.3);

  &:hover {
    filter: brightness(1.05);
  }

  &:active {
    transform: translateY(3px);
    box-shadow: 0 1px 0 ${scColors.green.dark};
  }
`

export const RemoveButton = styled.button`
  height: 3rem;
  padding: 0 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, ${scColors.red.light} 0%, ${scColors.red.base} 100%);
  border: ${borders.button};
  border-radius: ${borderRadius.lg};
  box-shadow: 0 4px 0 ${scColors.red.dark};
  font-size: 1.125rem;
  font-weight: 800;
  font-style: italic;
  text-transform: uppercase;
  color: ${scColors.white};
  cursor: pointer;
  transition: transform 100ms ease, box-shadow 100ms ease;
  font-family: 'Lilita One', cursive;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.3);

  &:active {
    transform: translateY(3px);
    box-shadow: 0 1px 0 ${scColors.red.dark};
  }
`

export const GuideLinkWrapper = styled.div`
  text-align: center;
`

export const GuideLink = styled.button`
  background: none;
  border: none;
  padding: 0;
  font-size: 0.75rem;
  font-weight: 700;
  font-style: italic;
  text-decoration: underline;
  text-underline-offset: 2px;
  color: rgba(255, 255, 255, 0.45);
  cursor: pointer;
  transition: color 150ms ease;
  font-family: 'Lilita One', cursive;

  &:hover {
    color: rgba(255, 255, 255, 0.75);
  }
`
