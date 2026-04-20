import { useState } from 'react'

interface Props {
  onAdd: (name: string, icon: string, color: string) => void
  onClose: () => void
}

const OPTIONS = [
  { icon: '⭐', color: '#FEF3C7' },
  { icon: '💪', color: '#DBEAFE' },
  { icon: '📚', color: '#EDE9FE' },
  { icon: '🧘', color: '#D1FAE5' },
  { icon: '🏃', color: '#FCE7F3' },
  { icon: '💧', color: '#CFFAFE' },
  { icon: '🍎', color: '#FEE2E2' },
  { icon: '🎯', color: '#F3F4F6' },
]

export default function AddHabitModal({ onAdd, onClose }: Props) {
  const [name, setName] = useState('')
  const [selected, setSelected] = useState(0)

  function handleAdd() {
    if (!name.trim()) return
    const { icon, color } = OPTIONS[selected]
    onAdd(name.trim(), icon, color)
    onClose()
  }

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-xl"
        onClick={e => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-5">novo hábito</h2>

        <label className="text-xs uppercase tracking-wider text-gray-400 block mb-2">
          nome
        </label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleAdd()}
          placeholder="ex: meditar, ler, exercitar"
          className="w-full border border-gray-200 rounded-xl px-4 h-10 text-sm text-gray-800 outline-none focus:border-emerald-400 mb-5"
          autoFocus
        />

        <label className="text-xs uppercase tracking-wider text-gray-400 block mb-3">
          ícone
        </label>
        <div className="grid grid-cols-4 gap-2 mb-6">
          {OPTIONS.map((opt, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`h-12 rounded-xl text-xl transition-all
                ${selected === i
                  ? 'ring-2 ring-emerald-400 scale-105'
                  : 'border border-gray-100 hover:border-gray-300'
                }`}
              style={{ background: opt.color }}
            >
              {opt.icon}
            </button>
          ))}
        </div>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 h-10 rounded-xl border border-gray-200 text-sm text-gray-500 hover:bg-gray-50"
          >
            cancelar
          </button>
          <button
            onClick={handleAdd}
            className="flex-1 h-10 rounded-xl bg-emerald-500 text-white text-sm font-medium hover:bg-emerald-600"
          >
            adicionar
          </button>
        </div>
      </div>
    </div>
  )
}