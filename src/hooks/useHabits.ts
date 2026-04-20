import { useState, useEffect } from 'react'
import type { Habit } from '../types'

export function useHabits() {
  const [habits, setHabits] = useState<Habit[]>(() => {
    const saved = localStorage.getItem('habits')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(habits))
  }, [habits])

  function todayKey() {
    return new Date().toISOString().split('T')[0]
  }

  function addHabit(name: string, icon: string, color: string) {
    const newHabit: Habit = {
      id: crypto.randomUUID(),
      name,
      icon,
      color,
      createdAt: todayKey(),
      completedDates: [],
    }
    setHabits(prev => [...prev, newHabit])
  }

  function toggleToday(id: string) {
    const today = todayKey()
    setHabits(prev =>
      prev.map(h => {
        if (h.id !== id) return h
        const done = h.completedDates.includes(today)
        return {
          ...h,
          completedDates: done
            ? h.completedDates.filter(d => d !== today)
            : [...h.completedDates, today],
        }
      })
    )
  }

  function calcStreak(habit: Habit): number {
    let streak = 0
    const d = new Date()
    while (true) {
      const key = d.toISOString().split('T')[0]
      if (habit.completedDates.includes(key)) {
        streak++
        d.setDate(d.getDate() - 1)
      } else break
    }
    return streak
  }

  function getLast7Days(): string[] {
    return Array.from({ length: 7 }, (_, i) => {
      const d = new Date()
      d.setDate(d.getDate() - (6 - i))
      return d.toISOString().split('T')[0]
    })
  }

  return { habits, addHabit, toggleToday, calcStreak, getLast7Days, todayKey }
}