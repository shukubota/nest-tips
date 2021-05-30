import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
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

const updatedRecipe = {
  id: '1',
  title: 'title1-new',
};

@Resolver(() => Recipe)
export class RecipesResolver {
  @Query(() => [Recipe])
  async recipes(): Promise<Recipe[]> {
    return recipeTable;
  }

  @Mutation(() => Recipe)
  async updateRecipe(@Args({ name: 'title', type: () => String }) title: string): Promise<Recipe> {
    console.log(title);
    return updatedRecipe;
  }

  // playground↓
  // mutation {
  //   updateRecipe(title: "new") {
  //     id
  //     title
  //   }
  // }
}
