data class HabitState(val done: Boolean = false, val correct: Boolean = false)
fun choose(state: HabitState, action: String): HabitState = when {
    state.done -> state
    action == "wash" -> HabitState(true, true)
    action == "eat" -> HabitState(true, false)
    else -> state
}
fun main() {
    val initial = HabitState()
    val complete = choose(initial, "wash")
    check(complete.correct)
    check(choose(complete, "eat") == complete)
    check(choose(initial, "unknown") == initial)
    println("Habit state checks passed")
}
