export interface CategoryListThemesProps {
  id: number;
  name: string;
}

export const organizeList = (categoryList: CategoryListThemesProps[]) => {
  const categoryListThemesOrganized = categoryList.sort((x, y) => {
    const categoryOne = x.name.toUpperCase();
    const categoryTwo = y.name.toUpperCase();
    return categoryOne === categoryTwo ? 0 : categoryOne > categoryTwo ? 1 : -1;
  });

  return categoryListThemesOrganized;
};
