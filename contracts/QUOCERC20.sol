pragma solidity ^0.6.8;

import "@openzeppelin/contracts-ethereum-package/contracts/Initializable.sol";
import "@openzeppelin/contracts-ethereum-package/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts-ethereum-package/contracts/GSN/Context.sol";

/**
 * @dev Vanilla upgradeable {ERC20} "QUOC" token, including:
 *
 *  - 3.7 million preminted tokens
 *
 */
contract QUOCERC20UpgradeSafe is Initializable, ContextUpgradeSafe, ERC20UpgradeSafe {
    uint8 public constant DECIMALS = 8;                         // The number of decimals for display

    /**
     * See {ERC20-constructor}.
     */

    function initialize(address escrow) public initializer {
        ERC20UpgradeSafe.__ERC20_init("QUOC Economic Token", "QUOC");
        _setupDecimals(DECIMALS);
        uint256 INITIAL_SUPPLY = 3700000 * 10**uint256(DECIMALS);  // supply specified in base units
        _mint(escrow, INITIAL_SUPPLY);
        require(totalSupply() == INITIAL_SUPPLY, "QUOC: totalSupply must equal 3.7 million");
    }
}
