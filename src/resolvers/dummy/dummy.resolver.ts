//#region Imports

import { Resolver, ResolverContract } from '../../contracts';

//#endregion

/**
 * The class that represents a dummy resolver that does nothing and can be used by the cloud that doesn't use resolvers.
 */
export class DummyResolver
  implements ResolverContract<any, any, any, any, any>
{
  /**
   * @inheritDoc
   */
  public createResolver(): Resolver<any, void> {
    return {
      run: () => Promise.resolve(),
    };
  }
}
