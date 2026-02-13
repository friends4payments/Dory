/**
 * URLInputModal Component
 * Modal for entering server URL with validation
 * Blue gradient style aligned with MinecraftGuide modal
 */

import React, { useState } from 'react'
import * as S from './URLInputModal.styled'

export interface URLInputModalProps {
  initialValue: string
  onSave: (url: string) => void
  onClose: () => void
  onOpenGuide: () => void
}

export const URLInputModal: React.FC<URLInputModalProps> = ({
  initialValue,
  onSave,
  onClose,
  onOpenGuide,
}) => {
  const [url, setUrl] = useState(initialValue)
  const [error, setError] = useState<string | null>(null)

  const validateAndSave = () => {
    const trimmedUrl = url.trim()

    // Allow empty — clears the stored URL
    if (!trimmedUrl) {
      setError(null)
      onSave('')
      return
    }

    // Basic URL validation
    if (!trimmedUrl.startsWith('tcp://')) {
      setError('URL MUST START WITH TCP://')
      return
    }

    const urlPattern = /^tcp:\/\/[a-z0-9.-]+:\d+$/i
    if (!urlPattern.test(trimmedUrl)) {
      setError('PLEASE ENTER A VALID TCP URL')
      return
    }

    setError(null)
    onSave(trimmedUrl)
  }

  const handleRemove = () => {
    setUrl('')
    setError(null)
    onSave('')
  }

  return (
    <S.Backdrop>
      <S.Card>
        <S.Header>
          <S.Title>
            SERVER <S.TitleAccent>LINK</S.TitleAccent>
          </S.Title>
          <S.CloseButton type="button" onClick={onClose} aria-label="Close">
            X
          </S.CloseButton>
        </S.Header>

        <S.Content>
          <S.Subtitle>Enter your server address</S.Subtitle>

          <S.InputWrapper>
            <S.InputCard $hasError={!!error}>
              <S.Input
                type="text"
                value={url}
                onChange={e => {
                  setUrl(e.target.value)
                  if (error) setError(null)
                }}
                placeholder="tcp://your-server:25565"
                maxLength={120}
                onKeyDown={e => e.key === 'Enter' && validateAndSave()}
                aria-invalid={!!error}
                aria-describedby={error ? 'url-error' : undefined}
              />
            </S.InputCard>
            <S.ErrorSlot>
              {error && (
                <S.ErrorText id="url-error" role="alert">
                  {error}
                </S.ErrorText>
              )}
            </S.ErrorSlot>
          </S.InputWrapper>
        </S.Content>

        <S.Footer>
          <S.ButtonRow>
            <S.ConfirmButton type="button" onClick={validateAndSave}>
              SAVE
            </S.ConfirmButton>
            <S.RemoveButton type="button" onClick={handleRemove}>
              CLEAR
            </S.RemoveButton>
          </S.ButtonRow>
          <S.GuideLinkWrapper>
            <S.GuideLink type="button" onClick={onOpenGuide}>
              Learn how to connect to your server
            </S.GuideLink>
          </S.GuideLinkWrapper>
        </S.Footer>
      </S.Card>
    </S.Backdrop>
  )
}

export default URLInputModal
