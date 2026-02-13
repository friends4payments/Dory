/**
 * GameStatusCard Component
 * Shows current game session status with optional ngrok server URL
 * Brawl Stars card style — pink glows when playing, polished standby state when dormant
 */

import React from 'react'
import { GameState } from '../../../hooks/useVoiceAgent'
import * as S from './GameStatusCard.styled'

export interface GameStatusCardProps {
  game: GameState
  ngrokURL?: string | null
  onClick?: () => void
  onInfoClick?: () => void
  onConnect?: () => void
}

const DEFAULT_COVER =
  'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=400'
const MINECRAFT_COVER = '/games/minecraft.webp'

export const GameStatusCard: React.FC<GameStatusCardProps> = ({
  game,
  ngrokURL = null,
  onClick,
  onInfoClick,
  onConnect,
}) => {
  const isServerActive = !!ngrokURL && ngrokURL.trim() !== ''
  const isPlaying = isServerActive
  const displayName = isServerActive ? 'Minecraft' : 'Tap to Connect'
  const displayImage = isServerActive ? MINECRAFT_COVER : game.coverUrl || DEFAULT_COVER

  return (
    <S.Root>
      <S.Card $isPlaying={!!isPlaying} onClick={onClick}>
        {/* Playing Background Glows */}
        {isPlaying && (
          <>
            <S.GlowTop />
            <S.GlowBottom />
          </>
        )}

        <S.Content>
          {/* Game Cover Image */}
          <S.CoverImage $isPlaying={!!isPlaying}>
            <S.CoverImg
              src={displayImage}
              alt={displayName || 'Game'}
              $isPlaying={!!isPlaying}
            />
            {isPlaying && <S.CoverGradient />}
            {isServerActive && <S.LiveDot />}
          </S.CoverImage>

          {/* Game Info */}
          <S.Info>
            <S.SessionStatus $isPlaying={!!isPlaying}>
              {isServerActive
                ? '• SERVER LINKED'
                : isPlaying
                  ? '• SESSION ACTIVE'
                  : '• AWAITING SERVER'}
            </S.SessionStatus>

            <S.GameName $isPlaying={!!isPlaying}>{displayName}</S.GameName>

            {/* Server badges (URL + Port) when ngrok is active */}
            {isServerActive && ngrokURL && (
              <S.Badges>
                <S.UrlBadge title={ngrokURL}>{ngrokURL}</S.UrlBadge>
                <S.PortBadge>PORT: 25565</S.PortBadge>
              </S.Badges>
            )}

            {/* Shimmer bar for standby */}
            {!isPlaying && <S.ShimmerBar />}

            {/* Active but not server-linked: status bars */}
            {isPlaying && !isServerActive && (
              <S.StatusFooter>
                <S.StatusBars>
                  {[0, 1, 2].map(i => (
                    <S.StatusBar key={i} $isPlaying={!!isPlaying} $index={i} />
                  ))}
                </S.StatusBars>
                <S.SyncLabel $isPlaying={!!isPlaying}>SYNCING DATA...</S.SyncLabel>
              </S.StatusFooter>
            )}
          </S.Info>

          {/* Right button: info / setup guide */}
          <S.EditButtonWrap>
            <S.InfoIconButton
              type="button"
              onClick={e => { e.stopPropagation(); onInfoClick?.() }}
              title="Setup guide"
              aria-label="Open setup instructions"
            >
              ?
            </S.InfoIconButton>
          </S.EditButtonWrap>
        </S.Content>
      </S.Card>

      {/* Connect button when server is active */}
      {isServerActive && onConnect && (
        <S.ConnectButton type="button" onClick={onConnect}>
          CONNECT
        </S.ConnectButton>
      )}
    </S.Root>
  )
}

export default GameStatusCard
