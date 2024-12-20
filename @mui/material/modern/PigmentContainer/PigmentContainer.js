import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
// @ts-ignore
import Container from '@mui/material-pigment-css/Container';
import capitalize from '@mui/utils/capitalize';
import composeClasses from '@mui/utils/composeClasses';
import generateUtilityClass from '@mui/utils/generateUtilityClass';
import { jsx as _jsx } from "react/jsx-runtime";
const useUtilityClasses = ownerState => {
  const {
    classes,
    fixed,
    disableGutters,
    maxWidth
  } = ownerState;
  const slots = {
    root: ['root', maxWidth && `maxWidth${capitalize(String(maxWidth))}`, fixed && 'fixed', disableGutters && 'disableGutters']
  };
  return composeClasses(slots, slot => generateUtilityClass('MuiContainer', slot), classes);
};
/**
 *
 * Demos:
 *
 * - [Container](https://mui.com/material-ui/react-container/)
 *
 * API:
 *
 * - [PigmentContainer API](https://mui.com/material-ui/api/pigment-container/)
 */
const PigmentContainer = /*#__PURE__*/React.forwardRef(function PigmentContainer({
  className,
  disableGutters = false,
  fixed = false,
  maxWidth = 'lg',
  ...props
}, ref) {
  const ownerState = {
    ...props,
    disableGutters,
    fixed,
    maxWidth
  };
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/_jsx(Container, {
    className: clsx(classes.root, className),
    disableGutters: disableGutters,
    fixed: fixed,
    maxWidth: maxWidth,
    ...props,
    // @ts-ignore
    ref: ref
  });
});
process.env.NODE_ENV !== "production" ? PigmentContainer.propTypes /* remove-proptypes */ = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: PropTypes.bool,
  /**
   * Set the max-width to match the min-width of the current breakpoint.
   * This is useful if you'd prefer to design for a fixed set of sizes
   * instead of trying to accommodate a fully fluid viewport.
   * It's fluid by default.
   * @default false
   */
  fixed: PropTypes.bool,
  /**
   * Determine the max-width of the container.
   * The container width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * @default 'lg'
   */
  maxWidth: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs', false]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])), PropTypes.func, PropTypes.object])
} : void 0;
export default PigmentContainer;