/**
 * GameStatusCard Styled Components
 * Supercell / Brawl Stars game UI style
 * Supports ngrok server-active state with URL/port badges
 */

import styled, { css, keyframes } from 'styled-components'
import { scColors, borderRadius } from '@/theme'

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
`

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`

// ==================== ROOT ====================

export const Root = styled.div`
  width: 100%;
  padding: 0 0.5rem;
  transition: all 300ms ease;
`

export const Card = styled.div<{ $isPlaying: boolean }>`
  position: relative;
  overflow: hidden;
  padding: 1rem;
  border-radius: 16px;
  border: 4px solid ${scColors.black};
  cursor: pointer;
  min-height: 100px;
  display: flex;
  align-items: center;
  transition: transform 100ms ease, box-shadow 100ms ease;

  &:active {
    transform: translateY(3px);
  }

  ${props =>
    props.$isPlaying
      ? css`
          background: linear-gradient(
            180deg,
            ${scColors.pink.light}30,
            ${scColors.pink.base}20
          );
          box-shadow:
            0 6px 0 rgba(0, 0, 0, 0.3),
            0 0 0 2px ${scColors.pink.base};

          &:active {
            box-shadow: 0 2px 0 rgba(0, 0, 0, 0.3);
          }
        `
      : css`
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.03) 0%,
            rgba(0, 0, 0, 0.06) 100%
          );
          border-color: ${scColors.pink.base}88;
          box-shadow: 0 4px 0 ${scColors.pink.base}20;

          &:hover {
            border-color: ${scColors.pink.base}AA;
            box-shadow: 0 4px 0 ${scColors.pink.base}30;
          }

          &:active {
            box-shadow: 0 1px 0 ${scColors.pink.base}18;
          }
        `}
`

// ==================== GLOWS ====================

export const GlowTop = styled.div`
  position: absolute;
  top: -2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 3rem;
  background: ${scColors.pink.base};
  opacity: 0.15;
  border-radius: 100px;
  filter: blur(16px);
  pointer-events: none;
`

export const GlowBottom = styled.div`
  position: absolute;
  bottom: -1.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  height: 2rem;
  background: ${scColors.pink.base};
  opacity: 0.1;
  border-radius: 100px;
  filter: blur(12px);
  pointer-events: none;
`

// ==================== CONTENT ====================

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;
  position: relative;
  z-index: 10;
  width: 100%;
`

// ==================== COVER IMAGE ====================

export const CoverImage = styled.div<{ $isPlaying: boolean }>`
  position: relative;
  width: 3.5rem;
  height: 4rem;
  border-radius: 10px;
  overflow: hidden;
  flex-shrink: 0;
  border: 3px solid ${scColors.black};
  box-shadow: 0 3px 0 rgba(0, 0, 0, 0.3);
  background: ${scColors.black};
  transition: transform 100ms ease;

  ${props =>
    !props.$isPlaying &&
    css`
      border-color: rgba(0, 0, 0, 0.25);
      box-shadow: 0 2px 0 rgba(0, 0, 0, 0.12);
    `}

  &:hover {
    transform: scale(1.05);
  }
`

export const CoverImg = styled.img<{ $isPlaying: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 300ms ease;

  ${props =>
    !props.$isPlaying &&
    css`
      filter: grayscale(0.8) brightness(0.65) contrast(1.1);
    `}
`

export const CoverGradient = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.15), transparent 60%);
  border: 2px solid rgba(255, 255, 255, 0.25);
  border-radius: inherit;
  pointer-events: none;
`

// ==================== SERVER LIVE DOT ====================

export const LiveDot = styled.div`
  position: absolute;
  bottom: -3px;
  right: -3px;
  width: 14px;
  height: 14px;
  background: ${scColors.green.base};
  border: 3px solid ${scColors.black};
  border-radius: 50%;
  z-index: 20;
  animation: ${pulse} 1.5s ease-in-out infinite;
`

// ==================== STANDBY COVER OVERLAY ====================

export const StandbyOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  z-index: 5;
`

export const StandbyIcon = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0.375rem;
    height: 0.375rem;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
  }
`

// ==================== INFO ====================

export const Info = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const SessionStatus = styled.div<{ $isPlaying: boolean }>`
  font-size: 0.5625rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-bottom: 0.25rem;
  font-family: 'Lilita One', cursive;

  ${props =>
    props.$isPlaying
      ? css`
          color: ${scColors.pink.base};
        `
      : css`
          color: ${scColors.white};
          text-shadow:
            1px 1px 0 ${scColors.black},
            -1px -1px 0 ${scColors.black},
            1px -1px 0 ${scColors.black},
            -1px 1px 0 ${scColors.black};
        `}
`

export const GameName = styled.div<{ $isPlaying: boolean }>`
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  line-height: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all 150ms ease;
  font-family: 'Lilita One', cursive;

  ${props =>
    props.$isPlaying
      ? css`
          color: ${scColors.black};
          font-size: 1.125rem;
        `
      : css`
          color: ${scColors.white};
          font-size: 1rem;
          font-style: italic;
          text-shadow:
            2px 2px 0 ${scColors.black},
            -1px -1px 0 ${scColors.black},
            1px -1px 0 ${scColors.black},
            -1px 1px 0 ${scColors.black};
        `}
`

// ==================== NGROK BADGES (shown when server is active) ====================

export const Badges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  margin-top: 0.375rem;
`

export const UrlBadge = styled.span`
  font-size: 0.5rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${scColors.white};
  background: ${scColors.blue.base};
  padding: 0.0625rem 0.375rem;
  border-radius: 100px;
  border: 2px solid ${scColors.black};
  max-width: 8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: 'Lilita One', cursive;
`

export const PortBadge = styled.span`
  font-size: 0.5rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${scColors.black};
  background: ${scColors.yellow.base};
  padding: 0.0625rem 0.375rem;
  border-radius: 100px;
  border: 2px solid ${scColors.black};
  flex-shrink: 0;
  font-family: 'Lilita One', cursive;
`

// ==================== STATUS FOOTER ====================

export const StatusFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 0.5rem;
`

export const StatusBars = styled.div`
  display: flex;
  gap: 3px;
`

export const StatusBar = styled.div<{ $isPlaying: boolean; $index: number }>`
  width: 0.75rem;
  height: 5px;
  border-radius: 100px;
  transition: all 300ms ease;

  ${props =>
    props.$isPlaying
      ? css`
          background: ${scColors.pink.base};
          opacity: ${1 - props.$index * 0.2};
        `
      : css`
          background: rgba(255, 255, 255, 0.25);
        `}
`

export const SyncLabel = styled.span<{ $isPlaying: boolean }>`
  font-size: 0.5rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-family: 'Lilita One', cursive;

  ${props =>
    props.$isPlaying
      ? css`
          color: ${scColors.blue.base};
        `
      : css`
          color: rgba(255, 255, 255, 0.4);
          text-shadow:
            1px 1px 0 ${scColors.black},
            -1px -1px 0 ${scColors.black},
            1px -1px 0 ${scColors.black},
            -1px 1px 0 ${scColors.black};
        `}
`

// ==================== EDIT / INFO BUTTON ====================

export const EditButtonWrap = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
`

export const EditButton = styled.div`
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.15);
  border: 2px solid rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.5625rem;
  font-weight: 800;
  font-style: italic;
  color: rgba(0, 0, 0, 0.4);
  cursor: pointer;
  transition: all 150ms ease;
  font-family: 'Lilita One', cursive;
  padding: 0;
  line-height: 1;

  &:hover {
    background: rgba(0, 0, 0, 0.22);
    border-color: rgba(0, 0, 0, 0.35);
    color: rgba(0, 0, 0, 0.6);
  }

  &:active {
    transform: scale(0.9);
  }
`

export const InfoIconButton = styled.button`
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.15);
  border: 2px solid rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 800;
  font-style: italic;
  color: rgba(0, 0, 0, 0.4);
  cursor: pointer;
  transition: all 150ms ease;
  font-family: 'Lilita One', cursive;
  padding: 0;
  line-height: 1;

  &:hover {
    background: rgba(0, 0, 0, 0.22);
    border-color: rgba(0, 0, 0, 0.35);
    color: rgba(0, 0, 0, 0.6);
  }

  &:active {
    transform: scale(0.9);
  }
`

// ==================== CONNECT BUTTON ====================

export const ConnectButton = styled.button`
  width: 100%;
  height: 2.5rem;
  margin-top: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: linear-gradient(180deg, ${scColors.green.light} 0%, ${scColors.green.base} 100%);
  border: 3px solid ${scColors.black};
  border-radius: ${borderRadius.lg};
  box-shadow: 0 4px 0 ${scColors.green.dark};
  font-size: 0.875rem;
  font-weight: 800;
  font-style: italic;
  text-transform: uppercase;
  color: ${scColors.white};
  cursor: pointer;
  transition: transform 100ms ease, box-shadow 100ms ease;
  font-family: 'Lilita One', cursive;
  text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.3);
  letter-spacing: 0.05em;

  &:hover {
    filter: brightness(1.05);
  }

  &:active {
    transform: translateY(3px);
    box-shadow: 0 1px 0 ${scColors.green.dark};
  }
`

// ==================== SHIMMER BAR (standby decoration) ====================

export const ShimmerBar = styled.div`
  width: 100%;
  height: 2px;
  margin-top: 0.5rem;
  border-radius: 100px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.12) 25%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.12) 75%,
    transparent 100%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 3s linear infinite;
`
