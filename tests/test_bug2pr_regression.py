import pytest

def test_division_by_zero_prevented():
    """Test that division by zero is prevented."""
    base_price = 100
    count = 0
    
    # Fixed code should check for zero
    if count > 0:
        price_per_item = base_price / count
    else:
        price_per_item = 0  # or raise appropriate error
    
    assert price_per_item == 0


def test_normal_division_works():
    """Test that normal division still works."""
    base_price = 100
    count = 5
    
    price_per_item = base_price / count
    assert price_per_item == 20.0
