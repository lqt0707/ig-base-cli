/**
 * 任务队列
 */
declare class TaskQueue {
    private tasks;
    private running;
    constructor();
    enqueue(task: () => void): void;
    private runNextTask;
    start(): void;
}
export default TaskQueue;
