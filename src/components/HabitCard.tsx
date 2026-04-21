import type { Habit } from '../types'

interface Props {
  habit: Habit
  streak: number
  last7: string[]
  todayKey: string
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

const DAYS = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

export default function HabitCard({ habit, streak, last7, todayKey, onToggle, onDelete }: Props) {
  const doneToday = habit.completedDates.includes(todayKey)

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center text-lg"
            style={{ background: habit.color }}
          >
            {habit.icon}
          </div>
          <span className="font-medium text-gray-800">{habit.name}</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-orange-500 font-mono text-sm font-medium">
            <span>🔥</span>
            <span>{streak}</span>
          </div>
          <button
            onClick={() => onDelete(habit.id)}
            className="text-gray-300 hover:text-red-400 transition-colors text-sm"
          >
            ✕
          </button>
        </div>
      </div>

      <div className="flex gap-2 mb-3">
        {last7.map((day) => {
          const dow = new Date(day + 'T12:00:00').getDay()
          const done = habit.completedDates.includes(day)
          const isToday = day === todayKey
          return (
            <div
              key={day}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono
                ${done
                  ? 'bg-emerald-500 text-white'
                  : isToday
                  ? 'border border-gray-300 text-gray-400'
                  : 'border border-gray-100 text-gray-300'
                }`}
            >
              {DAYS[dow]}
            </div>
          )
        })}
      </div>

      <button
        onClick={() => onToggle(habit.id)}
        className={`w-full h-9 rounded-xl text-sm font-medium transition-all
          ${doneToday
            ? 'bg-emerald-500 text-white'
            : 'border border-gray-200 text-gray-400 hover:border-emerald-400 hover:text-emerald-500'
          }`}
      >
        {doneToday ? '✓ feito hoje' : 'marcar hoje'}
      </button>
    </div>
  )
}