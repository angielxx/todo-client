import { AddTodoBtn } from '@/components/Todo';
import { AddTodoForm } from '@/components/Todo/AddTodoForm';
import { DateTitle } from '@/components/Todo/DateTitle';
import { WeeklyCalendar } from '@/components/Todo/WeeklyCalendar';
import { useState } from 'react';

export const Todo = () => {
  const [isFormHidden, setIsFormHidden] = useState<boolean>(true);

  const showForm = () => setIsFormHidden(false);

  return (
    <div>
      {!isFormHidden && <AddTodoForm />}
      {isFormHidden && <AddTodoBtn onClick={showForm} />}
      <DateTitle />
      <WeeklyCalendar />
    </div>
  );
};
