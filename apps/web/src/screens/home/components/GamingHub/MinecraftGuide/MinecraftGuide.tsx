/**
 * MinecraftGuide Component
 * Multiplayer setup guide modal with copy-to-clipboard steps
 */

import React, { useState } from 'react'
import { CreditCard } from 'lucide-react'
import * as S from './MinecraftGuide.styled'

export interface MinecraftGuideProps {
  onClose: () => void
}

export const MinecraftGuide: React.FC<MinecraftGuideProps> = ({ onClose }) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  return (
    <S.Backdrop>
      <S.Card>
        <S.Header>
          <S.Title>
            MINECRAFT MULTIPLAYER GUIDE
          </S.Title>
          <S.CloseButton type="button" onClick={onClose} aria-label="Close">
            X
          </S.CloseButton>
        </S.Header>

        <S.Content>
          {/* Featured Video Section */}
          <S.VideoSection>
            <S.VideoSectionHeader>
              <S.VideoSectionBar />
              <S.VideoSectionTitle>Master Class Tutorial</S.VideoSectionTitle>
            </S.VideoSectionHeader>
            <S.VideoWrapper>
              <S.VideoImage
                src="https://images.unsplash.com/photo-1627389955609-bf2420658700?auto=format&fit=crop&q=80&w=1200"
                alt="Minecraft Tutorial"
              />
              <S.VideoPlayOverlay>
                <S.VideoPlayButton className="play-button">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </S.VideoPlayButton>
              </S.VideoPlayOverlay>
              <S.VideoBadge>PRO TIPS</S.VideoBadge>
            </S.VideoWrapper>
          </S.VideoSection>

          {/* Section 1: Server Setup */}
          <S.Section>
            <S.SectionHeader>
              <S.SectionNumber>1</S.SectionNumber>
              <S.SectionTitle>Set up a local server</S.SectionTitle>
            </S.SectionHeader>

            <S.StepsGrid $borderColor="rgba(255, 204, 0, 0.3)">
              {/* Step 1: Install */}
              <S.StepCard>
                <S.StepSubtitlePink>Step 1: Install ngrok</S.StepSubtitlePink>
                <S.StepContent>
                  <div>
                    <S.StepOsLabel>MacOS Terminal</S.StepOsLabel>
                    <S.CodeRow>
                      <S.Code>brew install ngrok</S.Code>
                      <S.CopyButton
                        type="button"
                        $copied={copiedIndex === 1}
                        onClick={() => copyToClipboard('brew install ngrok', 1)}
                      >
                        {copiedIndex === 1 ? 'COPIED!' : 'COPY'}
                      </S.CopyButton>
                    </S.CodeRow>
                  </div>
                  <S.PlatformLinks>
                    <S.WindowsLink
                      href="https://ngrok.com/download/windows"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get for Windows
                    </S.WindowsLink>
                    <S.WindowsLink
                      href="https://ngrok.com/download/linux"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get for Linux
                    </S.WindowsLink>
                  </S.PlatformLinks>
                </S.StepContent>
              </S.StepCard>

              {/* Step 2: Account */}
              <S.StepCard>
                <S.StepSubtitlePink>Step 2: Auth Setup</S.StepSubtitlePink>
                <S.StepBody>Sign up at <S.InlineLink href="https://ngrok.com/" target="_blank" rel="noopener noreferrer">ngrok.com</S.InlineLink> and add your token:</S.StepBody>
                <S.CodeRowWide>
                  <S.Code className="break-all">
                    ngrok config add-authtoken &lt;token&gt;
                  </S.Code>
                  <S.CopyButton
                    type="button"
                    $copied={copiedIndex === 2}
                    onClick={() => copyToClipboard('ngrok config add-authtoken ', 2)}
                  >
                    {copiedIndex === 2 ? 'COPIED!' : 'COPY'}
                  </S.CopyButton>
                </S.CodeRowWide>
              </S.StepCard>

              {/* Step 3: Identity Verification */}
              <S.StepCard>
                <S.StepSubtitlePink>
                  <S.StepSubtitleIcon><CreditCard size={16} /></S.StepSubtitleIcon>
                  Step 3: Identity Verification
                </S.StepSubtitlePink>
                <S.StepBody>
                  You will need to add a credit card to your account profile.
                  <br />
                  <S.StepHighlight>NO PAYMENT NEEDED.</S.StepHighlight> This is strictly an
                  anti-bot measure from ngrok to prevent abuse, nothing will be billed.
                </S.StepBody>
              </S.StepCard>

              {/* Step 4: Launch Tunnel */}
              <S.StepCard>
                <S.StepSubtitlePink>Step 4: Launch Tunnel</S.StepSubtitlePink>
                <S.StepBody>
                  <S.StepHighlight>Important: use TCP, not HTTP.</S.StepHighlight> Minecraft
                  requires a TCP tunnel to work correctly.
                </S.StepBody>
                <S.CodeRow>
                  <S.Code>ngrok tcp 25565</S.Code>
                  <S.CopyButton
                    type="button"
                    $copied={copiedIndex === 4}
                    onClick={() => copyToClipboard('ngrok tcp 25565', 4)}
                  >
                    {copiedIndex === 4 ? 'COPIED!' : 'COPY'}
                  </S.CopyButton>
                </S.CodeRow>
              </S.StepCard>
            </S.StepsGrid>
          </S.Section>

          {/* Section 2: In-Game Actions */}
          <S.Section>
            <S.SectionHeader>
              <S.SectionNumber $accent="pink">2</S.SectionNumber>
              <S.SectionTitle>In-Game Actions</S.SectionTitle>
            </S.SectionHeader>

            <S.StepsGrid $borderColor="rgba(236, 72, 153, 0.3)">
              <S.StepCardRow>
                <S.StepCardRowText>
                  <S.StepSubtitlePink>Step 1: Create World</S.StepSubtitlePink>
                  <S.StepBody>
                    Start a new world with{' '}
                    <S.StepHighlight>Allow Cheats: ON</S.StepHighlight>
                  </S.StepBody>
                </S.StepCardRowText>
                <S.StepImage src="/games/minecraftstep1.png" alt="Create world with Allow Cheats ON" />
              </S.StepCardRow>

              <S.StepCardRow>
                <S.StepCardRowText>
                  <S.StepSubtitlePink>Step 2: Open to LAN</S.StepSubtitlePink>
                  <S.StepBody>
                    Open Menu →{' '}
                    <S.StepHighlight>Open Port 25565</S.StepHighlight>
                  </S.StepBody>
                </S.StepCardRowText>
                <S.StepImage src="/games/minecraftstep2.png" alt="Open to LAN on port 25565" />
              </S.StepCardRow>
            </S.StepsGrid>
          </S.Section>
        </S.Content>

        <S.Footer>
          <S.ContinueButton type="button" onClick={onClose}>
            Continue
          </S.ContinueButton>
        </S.Footer>
      </S.Card>
    </S.Backdrop>
  )
}

export default MinecraftGuide
