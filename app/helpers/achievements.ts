import { Achievement } from '../store/achievements/types';

const achievementsText = {
  100: 'Выполнить 100 задач. (Бывалый)',
  250: 'Выполнить 250 задач. (Опытный)',
  1000: 'Выполнить 1000 задач. (Профессионал)',
};

export const getAchievementEvents = (achievement: Achievement): Achievement => {
  const count = achievement.count + 1;
  switch (count) {
    case 100:
      return {
        ...achievement,
        text: achievementsText[count],
        open: true,
        list: [...achievement.list, achievementsText[count]],
        count,
      };
    case 250:
      return {
        ...achievement,
        text: achievementsText[count],
        open: true,
        list: [...achievement.list, achievementsText[count]],
        count,
      };
    case 1000:
      return {
        ...achievement,
        text: achievementsText[count],
        open: true,
        list: [...achievement.list, achievementsText[count]],
        count,
      };
    default:
      return {
        ...achievement,
        count,
      };
  }
};
