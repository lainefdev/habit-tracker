import { useState } from 'react'
import { useHabits } from './hooks/useHabits'
import HabitCard from './components/HabitCard'
import AddHabitModal from './components/AddHabitModal'

const DAYS = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado']
const MONTHS = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']

export default function App() {
  const { habits, addHabit, toggleToday, calcStreak, getLast7Days, todayKey } = useHabits()
  const [showModal, setShowModal] = useState(false)

  const today = new Date()
  const dateLabel = `${DAYS[today.getDay()]}, ${today.getDate()} ${MONTHS[today.getMonth()]}`
  const last7 = getLast7Days()
  const currentDay = todayKey()

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto px-4 py-8">

        <div className="flex items-end justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 leading-none">streaks</h1>
            <p className="text-sm text-gray-400 mt-1">{dateLabel}</p>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-2xl text-gray-500 hover:bg-gray-100 transition-all"
          >
            +
          </button>
        </div>

        {habits.length === 0 ? (
          <div className="text-center py-20 text-gray-300">
            <p className="text-5xl mb-4">🌱</p>
            <p className="text-sm">nenhum hábito ainda.</p>
            <p className="text-sm">clique em + para começar.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {habits.map(habit => (
              <HabitCard
                key={habit.id}
                habit={habit}
                streak={calcStreak(habit)}
                last7={last7}
                todayKey={currentDay}
                onToggle={toggleToday}
              />
            ))}
          </div>
        )}
      </div>

      {showModal && (
        <AddHabitModal
          onAdd={addHabit}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  )
}