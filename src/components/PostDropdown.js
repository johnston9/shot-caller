import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "../styles/PostDropdown.module.css";
import { useHistory } from "react-router";
import { useSetCategoryContext } from "../contexts/DeptCategoryContext";

const DropdownIcon = React.forwardRef(({ onClick }, ref) => (
  <i
    className="fas fa-ellipsis-v"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  />
));

export const PostDropdown = ({ handleEdit, handleDelete }) => {
  return (
    <Dropdown className="ml-auto" drop="left">
      <Dropdown.Toggle as={DropdownIcon} />

      <Dropdown.Menu
        className="text-center"
        popperConfig={{ strategy: "fixed" }}
      >
        <Dropdown.Item
          className={styles.DropdownItem}
          onClick={handleEdit}
          aria-label="edit"
        >
          <i className="fas fa-edit" />
        </Dropdown.Item>
        <Dropdown.Item
          className={styles.DropdownItem}
          onClick={handleDelete}
          aria-label="delete"
        >
          <i className="fas fa-trash-alt" />
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export function ProfileEditDropdown({ id }) {
  const history = useHistory();
  return (
    <Dropdown className={`ml-auto px-3 ${styles.Absolute}`} drop="left">
      <Dropdown.Toggle as={DropdownIcon} />
      <Dropdown.Menu>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit`)}
          aria-label="edit-profile"
        >
          <i className="fas fa-edit" /> edit profile
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit/username`)}
          aria-label="edit-username"
        >
          <i className="far fa-id-card" />
          change username
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => history.push(`/profiles/${id}/edit/password`)}
          aria-label="edit-password"
        >
          <i className="fas fa-key" />
          change password
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

// department dropdown 
export function DeptDropdown({ handleClick}) {
  const history = useHistory();
  return (
    <Dropdown className={`ml-auto px-3 ${styles.Absolute}`} drop="left">
      <Dropdown.Toggle as={DropdownIcon} />
      <Dropdown.Menu>
        <Dropdown.Item
          onClick={() => handleClick('requirements') }
          aria-label="select requirements"
        >
          <i className="fas fa-edit" /> Requirements
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => handleClick("workspace") }
          aria-label="select workspace"
        >
          <i className="fas fa-edit" /> Workspace
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => handleClick("finals") }
          aria-label="select finals"
        >
          <i className="fas fa-edit" /> Finals
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => handleClick("shooting") }
          aria-label="select shooting"
        >
          <i className="fas fa-edit" /> Shooting
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => handleClick("info") }
          aria-label="select info"
        >
          <i className="fas fa-edit" /> Info
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}