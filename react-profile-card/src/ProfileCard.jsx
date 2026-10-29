import React from 'react'

export function ProfileCard({ card, setCard, profiles }) {

  const profile = profiles[card]

  const handleCard = () => {
    if (card < profiles.length - 1) {
      setCard(card + 1)
    } else {
      setCard(card = 0)
    }
  }

  return (
    <main>
      <div 
        style={{
          border: '1px solid #ccc',
          borderRadius: '8px',
          padding: '16px'
        }}>
          <h2>{profile.name}</h2>
          <p>【年齢】{profile.age}歳</p>
          <p>【自己紹介】{profile.bio}</p>
          <button onClick={handleCard}>次のプロフィール</button>
      </div>
    </main>
  )
}