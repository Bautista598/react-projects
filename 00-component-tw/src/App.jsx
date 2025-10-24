import './App.css'
import { TwFollowCard } from './TwFollowCard.jsx'

export function App() {
	return (
		<div className="App">
			<TwFollowCard
				name="Miguel Angel Duran"
				userName="midudev"
				initialIsFollowing={true}
			>
				Miguel Angel Duran
			</TwFollowCard>
			<TwFollowCard userName="pheralb">Pablo Hernandez</TwFollowCard>
		</div>
	)
}
