import { useState } from 'react'

export function TwFollowCard({ userName, children, initialIsFollowing }) {
	const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

	const handleclick = () => {
		setIsFollowing(!isFollowing)
	}

	const text = isFollowing ? 'siguiendo' : 'seguir'
	const buttonClassName = isFollowing
		? 'tw-followCard-button is-following'
		: 'tw-followCard-button'

	return (
		<article className="tw-followCard">
			<header className="tw-followCard-header">
				<img
					src={`https://unavatar.io/${userName}`}
					alt=""
					className="tw-followCard-avatar"
				/>
				<div className="tw-followCard-info">
					<strong>{children}</strong>
					<span className="tw-followCard-infoUserName">@{userName}</span>
				</div>
			</header>

			<aside>
				<button className={buttonClassName} onClick={handleclick}>
					<span className="tw-followCard-text">{text}</span>
					<span className="tw-followCard-stopFollow">Dejar de seguir</span>
				</button>
			</aside>
		</article>
	)
}
