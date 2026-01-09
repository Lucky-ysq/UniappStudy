/**
 * 根据时间戳返回相对时间描述
 * @param {number|string|Date} timestamp - 时间戳 (毫秒)、日期字符串或 Date 对象
 * @returns {string|null} 相对时间描述，超过3个月返回 null
 */
export function formatRelativeTime(timestamp) {
    // 1. 确保输入转换为毫秒级时间戳
    const targetTime = new Date(timestamp).getTime();
    const now = Date.now();
    
    // 处理无效时间
    if (isNaN(targetTime)) {
        console.error("无效的时间戳");
        return null;
    }

    // 2. 计算时间差 (毫秒)
    const diff = now - targetTime;

    // 如果时间在未来 (容错处理)，或者刚刚发生
    if (diff < 0) return "1分钟内"; 

    // 3. 定义时间单位常量 (毫秒)
    const minute = 60 * 1000;
    const hour = 60 * minute;
    const day = 24 * hour;
    const month = 30 * day; // 此处按一个月30天估算

    // 4. 逻辑判断
    if (diff < minute) {
        return "1分钟内";
    } else if (diff < hour) {
        const minutes = Math.floor(diff / minute);
        return `${minutes}分钟前`;
    } else if (diff < day) {
        const hours = Math.floor(diff / hour);
        return `${hours}小时前`;
    } else if (diff < month) {
        const days = Math.floor(diff / day);
        return `${days}天前`;
    } else if (diff < 12 * month) {
        const months = Math.floor(diff / month);
        return `${months}个月前`;
    } else {
        // 超过三个月
        return null;
    }
}