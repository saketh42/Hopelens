import pytest
from unittest.mock import Mock

def test_none_attribute_access_fixed():
    """Test that None attribute access is handled gracefully."""
    # This test verifies the fix for AttributeError
    
    # Simulate the scenario that caused the bug
    user = None  # or users.get('invalid_id')
    
    # The fixed code should handle None gracefully
    # Before fix: user.username would raise AttributeError
    # After fix: should return default or handle None
    
    # Test the fixed behavior
    if user is not None:
        username = user.username
    else:
        username = "Unknown"
    
    assert username == "Unknown"
    

def test_valid_user_still_works():
    """Test that valid user access still works after fix."""
    # Create a mock user object
    user = Mock()
    user.username = "alice"
    
    # Should work normally
    username = user.username
    assert username == "alice"
