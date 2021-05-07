import { Achievement } from '../store/achievements/types';

export const getAchievementEvents = (achievement: Achievement): Achievement => {
  const count = achievement.count + 1;
  switch (count) {
    case 100:
      return {
        ...achievement,
        text: 'Выполнить 100 задач. (Бывалый)',
        open: true,
        count,
      };
    case 250:
      return {
        ...achievement,
        text: 'Выполнить 250 задач. (Опытный)',
        open: true,
        count,
      };
    case 1000:
      return {
        ...achievement,
        text: 'Выполнить 1000 задач. (Профессионал)',
        open: true,
        count,
      };
    default:
      return {
        ...achievement,
        count,
      };
  }
};
