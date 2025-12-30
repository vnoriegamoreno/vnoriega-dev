import { useSnowflakeEffect, snowflakeStyles } from './snowflake';
import { useFireworksEffect, fireworksStyles } from './fireworks';

export type EffectType = 'snowflake' | 'fireworks' | 'none';

// Change this flag to switch effects
export const ACTIVE_EFFECT: EffectType = 'snowflake';

export function useEffect(effectType: EffectType = ACTIVE_EFFECT) {
  switch (effectType) {
    case 'snowflake':
      return useSnowflakeEffect();
    case 'fireworks':
      return useFireworksEffect();
    case 'none':
    default:
      return { start: () => {}, stop: () => {} };
  }
}

export function getEffectStyles(effectType: EffectType = ACTIVE_EFFECT): string {
  switch (effectType) {
    case 'snowflake':
      return snowflakeStyles;
    case 'fireworks':
      return fireworksStyles;
    case 'none':
    default:
      return '';
  }
}

export { useSnowflakeEffect, useFireworksEffect };
