import { TukTukIcon } from 'thira-icons/react/tuk-tuk';
import { WaiIcon } from 'thira-icons/react/wai';
import { ElephantIcon } from 'thira-icons/react/elephant';
import { LotusIcon } from 'thira-icons/react/lotus';
import { TempleIcon } from 'thira-icons/react/temple';
import { StickyRiceIcon } from 'thira-icons/react/sticky-rice';
import { SearchIcon } from 'thira-icons/react/search';
import { HeartIcon } from 'thira-icons/react/heart';
import { BellIcon } from 'thira-icons/react/bell';
import { SettingsIcon } from 'thira-icons/react/settings';
import { CameraIcon } from 'thira-icons/react/camera';
import { MusicIcon } from 'thira-icons/react/music';
import { CoffeeIcon } from 'thira-icons/react/coffee';
import { MoonIcon } from 'thira-icons/react/moon';
import { SparklesIcon } from 'thira-icons/react/sparkles';
import { MapPinIcon } from 'thira-icons/react/map-pin';
import { ShoppingBagIcon } from 'thira-icons/react/shopping-bag';
import { MessageCircleIcon } from 'thira-icons/react/message-circle';

/**
 * A sample of thira-icons, rendered at build time (no client JS). The Thai set is mixed in
 * and picked out in the accent colour. Decorative: the whole grid is aria-hidden.
 */
const ICONS = [
  { Icon: TukTukIcon, thai: true },
  { Icon: SearchIcon },
  { Icon: HeartIcon },
  { Icon: WaiIcon, thai: true },
  { Icon: BellIcon },
  { Icon: SettingsIcon },
  { Icon: CameraIcon },
  { Icon: ElephantIcon, thai: true },
  { Icon: MusicIcon },
  { Icon: CoffeeIcon },
  { Icon: LotusIcon, thai: true },
  { Icon: MoonIcon },
  { Icon: SparklesIcon },
  { Icon: TempleIcon, thai: true },
  { Icon: MapPinIcon },
  { Icon: ShoppingBagIcon },
  { Icon: StickyRiceIcon, thai: true },
  { Icon: MessageCircleIcon },
];

export function IconGrid() {
  return (
    <div className="icon-grid" aria-hidden="true">
      {ICONS.map(({ Icon, thai }, i) => (
        <span key={i} className={thai ? 'icon-cell thai' : 'icon-cell'}>
          <Icon />
        </span>
      ))}
    </div>
  );
}
