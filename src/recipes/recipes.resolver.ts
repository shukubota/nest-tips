import { Resolver, Query } from '@nestjs/graphql';
import { Recipe } from './recipe';

const recipeTable = [
  {
    id: '1',
    title: 'title1',
  },
  {
    id: '2',
    title: 'title2',
  },
  {
    id: '3',
    title: 'title3',
  },
];

@Resolver(() => Recipe)
export class RecipesResolver {
  @Query(() => [Recipe])
  async recipes(): Promise<Recipe[]> {
    return recipeTable;
  }
}
