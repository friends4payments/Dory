/**
 * MinecraftGuide Styled Components
 * Supercell / Brawl Stars game UI style — blue gradient guide modal
 * Sizes are tuned to feel proportional to the GamingHub sidebar UI.
 */

import styled, { keyframes } from 'styled-components'
import { scColors, borders, borderRadius, boxShadow } from '@/theme'
import { fadeIn } from '@/theme/animations'

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
`

const ping = keyframes`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.2); }
`

// ==================== BACKDROP & CARD ====================

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  animation: ${fadeIn} 300ms ease-out;
`

export const Card = styled.div`
  width: 100%;
  max-width: 56rem;
  max-height: 90vh;
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

export const Title = styled.h2`
  font-size: 1.75rem;
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
  color: ${scColors.white};
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
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`

// ==================== VIDEO SECTION ====================

export const VideoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
`

export const VideoSectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const VideoSectionBar = styled.div`
  width: 0.375rem;
  height: 1.25rem;
  background: ${scColors.yellow.base};
  border: 2px solid ${scColors.black};
  transform: rotate(12deg);
`

export const VideoSectionTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 800;
  font-style: italic;
  text-transform: uppercase;
  color: ${scColors.white};
  margin: 0;
  text-shadow:
    2px 2px 0 ${scColors.black},
    -1px -1px 0 ${scColors.black},
    1px -1px 0 ${scColors.black},
    -1px 1px 0 ${scColors.black};
  font-family: 'Lilita One', cursive;
`

export const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: ${borderRadius['2xl']};
  border: ${borders.card};
  overflow: hidden;
  background: ${scColors.black};
  box-shadow: 0 12px 24px -6px rgba(0, 0, 0, 0.5);
`

export const VideoIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`

// ==================== SECTIONS ====================

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
`

export const SectionNumber = styled.div<{ $accent?: 'yellow' | 'pink' }>`
  width: 2.75rem;
  height: 2.75rem;
  background: ${props => (props.$accent === 'pink' ? scColors.pink.base : scColors.yellow.base)};
  border: 4px solid ${scColors.black};
  border-radius: ${borderRadius.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.375rem;
  font-weight: 800;
  color: ${props => (props.$accent === 'pink' ? scColors.white : scColors.black)};
  box-shadow: ${boxShadow.sm};
  font-family: 'Lilita One', cursive;
`

export const SectionTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 800;
  font-style: italic;
  text-transform: uppercase;
  color: ${scColors.white};
  margin: 0;
  text-shadow:
    2px 2px 0 ${scColors.black},
    -1px -1px 0 ${scColors.black},
    1px -1px 0 ${scColors.black},
    -1px 1px 0 ${scColors.black};
  font-family: 'Lilita One', cursive;
`

export const StepsGrid = styled.div<{ $borderColor: string }>`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-left: 0.75rem;
  border-left: 4px solid ${props => props.$borderColor};
`

// ==================== STEP CARDS ====================

export const StepCard = styled.div<{ $fullWidth?: boolean }>`
  padding: 1.25rem;
  background: rgba(255, 255, 255, 0.08);
  border: 3px solid rgba(0, 0, 0, 0.4);
  border-radius: ${borderRadius.lg};
  ${props => props.$fullWidth && 'grid-column: 1 / -1;'}
`

export const StepCardWhite = styled.div`
  padding: 1.25rem;
  background: ${scColors.white};
  color: ${scColors.black};
  border: 3px solid ${scColors.black};
  border-radius: ${borderRadius.lg};
  box-shadow: ${boxShadow.sm};
  position: relative;
  overflow: hidden;
`

export const StepCardDeco = styled.div<{ $color: string }>`
  position: absolute;
  right: -0.75rem;
  top: -0.75rem;
  width: 3.5rem;
  height: 3.5rem;
  background: ${props => props.$color};
  transform: rotate(12deg);
`

export const StepLabel = styled.span`
  display: block;
  font-size: 0.5625rem;
  font-weight: 800;
  text-transform: uppercase;
  opacity: 0.4;
  margin-bottom: 0.375rem;
  position: relative;
  z-index: 10;
  letter-spacing: 0.1em;
  font-family: 'Lilita One', cursive;
`

export const StepTitle = styled.p`
  font-size: 1.125rem;
  font-weight: 800;
  font-style: italic;
  text-transform: uppercase;
  line-height: 1;
  margin: 0 0 0.625rem 0;
  position: relative;
  z-index: 10;
  font-family: 'Lilita One', cursive;
`

export const StepDescription = styled.p`
  font-size: 0.8125rem;
  font-weight: 700;
  opacity: 0.8;
  text-transform: uppercase;
  font-style: italic;
  line-height: 1.3;
  margin: 0;
  position: relative;
  z-index: 10;
  font-family: 'Lilita One', cursive;
`

export const DescriptionAccentPink = styled.span`
  color: ${scColors.pink.dark};
  font-weight: 800;
  font-style: italic;
  text-decoration: underline;
`

export const DescriptionAccentBlue = styled.span`
  color: ${scColors.blue.base};
  font-weight: 800;
  font-style: italic;
  text-decoration: underline;
`

// ==================== STEP CONTENT HELPERS ====================

export const StepSubtitlePink = styled.span`
  font-size: 1.125rem;
  font-weight: 800;
  text-transform: uppercase;
  font-style: italic;
  color: ${scColors.white};
  margin-bottom: 0.625rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  letter-spacing: 0.05em;
  font-family: 'Lilita One', cursive;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.3);
`

export const StepSubtitleIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.75rem;
  height: 1.75rem;
  background: rgba(255, 255, 255, 0.15);
  border-radius: ${borderRadius.base};
  flex-shrink: 0;

  svg {
    stroke-width: 2.5;
    opacity: 0.9;
  }
`

export const StepSubtitleGreen = styled.span`
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  font-style: italic;
  color: ${scColors.green.light};
  margin-bottom: 0.5rem;
  display: block;
  letter-spacing: 0.1em;
  font-family: 'Lilita One', cursive;
`

/** Vertical stack for multiple elements inside a StepCard */
export const StepContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

/** Small OS / platform label (e.g. "MacOS Terminal") */
export const StepOsLabel = styled.span`
  display: block;
  font-size: 0.8125rem;
  font-weight: 800;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.25rem;
  letter-spacing: 0.05em;
`

/** Body text inside a step card */
export const StepBody = styled.p`
  font-size: 0.9375rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin: 0 0 0.5rem 0;
`

/** Highlighted inline text (e.g. "NO PAYMENT NEEDED") */
export const StepHighlight = styled.span`
  color: #ffcc00;
  font-weight: 800;
`

/** Step card with side-by-side text + image layout */
export const StepCardRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 1.25rem;
  background: rgba(255, 255, 255, 0.08);
  border: 3px solid rgba(0, 0, 0, 0.4);
  border-radius: ${borderRadius.lg};
`

export const StepCardRowText = styled.div`
  flex: 1;
  min-width: 0;
`

/** Screenshot image inside a step card */
export const StepImage = styled.img`
  width: 28rem;
  height: 18rem;
  flex-shrink: 0;
  border-radius: ${borderRadius.base};
  border: 2px solid rgba(255, 255, 255, 0.15);
  object-fit: cover;
`

/** Inline clickable link inside body text */
export const InlineLink = styled.a`
  color: ${scColors.white};
  text-decoration: underline;
  text-underline-offset: 2px;
  font-weight: 800;
  transition: opacity 150ms ease;

  &:hover {
    opacity: 0.8;
  }
`

// ==================== CODE & COPY ====================

export const CodeRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(0, 0, 0, 0.4);
  padding: 0.625rem 0.75rem;
  border-radius: ${borderRadius.lg};
  border: 2px solid rgba(0, 0, 0, 0.3);
`

export const CodeRowWide = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  background: rgba(0, 0, 0, 0.4);
  padding: 0.625rem 0.75rem;
  border-radius: ${borderRadius.lg};
  border: 2px solid rgba(0, 0, 0, 0.3);
`

export const Code = styled.code<{ $color?: string; $size?: 'sm' | 'lg' }>`
  flex: 1;
  font-family: 'JetBrains Mono', 'Fira Code', 'Source Code Pro', 'Roboto Mono', ui-monospace, monospace;
  font-size: ${props => (props.$size === 'lg' ? '1rem' : '0.8125rem')};
  color: ${props => props.$color || 'rgba(255, 255, 255, 0.75)'};
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.025em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &.break-all {
    white-space: normal;
    word-break: break-all;
    line-height: 1.5;
  }
`

export const CopyButton = styled.button<{ $copied?: boolean }>`
  flex-shrink: 0;
  padding: 0.25rem 0.625rem;
  border-radius: ${borderRadius.base};
  font-size: 0.75rem;
  font-weight: 800;
  font-style: italic;
  text-transform: uppercase;
  border: 2px solid ${scColors.black};
  box-shadow: 2px 2px 0 ${scColors.black};
  cursor: pointer;
  transition: all 150ms ease;
  font-family: 'Lilita One', cursive;

  ${props =>
    props.$copied
      ? `
    background: ${scColors.green.base};
    color: ${scColors.white};
  `
      : `
    background: ${scColors.yellow.base};
    color: ${scColors.black};
    &:hover { background: ${scColors.yellow.light}; }
  `}

  &:active {
    transform: scale(0.95);
  }
`

export const PlatformLinks = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const WindowsLink = styled.a`
  display: block;
  flex: 1;
  padding: 0.5rem;
  text-align: center;
  background: linear-gradient(180deg, ${scColors.yellow.light} 0%, ${scColors.yellow.base} 100%);
  border: 3px solid ${scColors.black};
  border-radius: ${borderRadius.lg};
  box-shadow: 0 4px 0 ${scColors.yellow.dark};
  font-size: 0.9375rem;
  font-weight: 800;
  text-transform: uppercase;
  font-style: italic;
  color: ${scColors.black};
  text-decoration: none;
  transition: transform 100ms ease, box-shadow 100ms ease;
  font-family: 'Lilita One', cursive;

  &:active {
    transform: translateY(3px);
    box-shadow: 0 1px 0 ${scColors.yellow.dark};
  }
`

// ==================== LEGACY (kept for compatibility) ====================

export const StepSubtitle = styled.span`
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  font-style: italic;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.5rem;
  display: block;
  letter-spacing: 0.1em;
  font-family: 'Lilita One', cursive;
`

export const IdentityRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.08);
  border: 3px solid rgba(0, 0, 0, 0.4);
  border-radius: ${borderRadius.lg};
  grid-column: 1 / -1;
`

export const IdentityEmoji = styled.div`
  font-size: 2.5rem;
  flex-shrink: 0;
  animation: ${bounce} 2s ease-in-out infinite;
`

export const TunnelRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.6);
  padding: 1rem;
  border-radius: ${borderRadius['2xl']};
  border: 3px solid ${scColors.black};
  grid-column: 1 / -1;
`

export const LiveBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 0.375rem;
`

export const LiveDot = styled.div`
  width: 0.625rem;
  height: 0.625rem;
  background: ${scColors.green.base};
  border-radius: 50%;
  animation: ${ping} 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
`

export const LiveLabel = styled.span`
  background: ${scColors.green.base};
  color: ${scColors.black};
  padding: 0.25rem 0.75rem;
  border-radius: ${borderRadius.lg};
  font-size: 0.75rem;
  font-weight: 800;
  font-style: italic;
  font-family: 'Lilita One', cursive;
`

// ==================== FOOTER ====================

export const Footer = styled.div`
  flex-shrink: 0;
  padding: 1rem 1.5rem;
  background: rgba(0, 0, 0, 0.4);
  border-top: ${borders.cardThin};
  display: flex;
  justify-content: center;
`

export const FooterText = styled.p`
  font-size: 0.9375rem;
  font-weight: 800;
  font-style: italic;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
  text-shadow:
    1px 1px 0 ${scColors.black},
    -1px -1px 0 ${scColors.black};
  font-family: 'Lilita One', cursive;
`

export const FooterAccent = styled.span`
  color: ${scColors.green.light};
  text-decoration: underline;
  font-style: italic;
`

export const ContinueButton = styled.button`
  padding: 0.625rem 2.5rem;
  background: linear-gradient(180deg, ${scColors.green.light} 0%, ${scColors.green.base} 100%);
  border: 4px solid ${scColors.black};
  border-radius: ${borderRadius.lg};
  box-shadow: 0 4px 0 ${scColors.green.dark};
  font-size: 1rem;
  font-weight: 800;
  text-transform: uppercase;
  font-style: italic;
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
